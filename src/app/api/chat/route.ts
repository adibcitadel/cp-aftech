const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_BASE_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are AFTECH AI, an intelligent assistant for PT AFTECH DAYA SOLUSINDO. You help visitors learn about AFTECH's services and products.

About AFTECH:
- Full name: PT AFTECH DAYA SOLUSINDO
- Location: Cilacap, Jawa Tengah, Indonesia (HQ), with Jakarta branch
- Industry: Enterprise technology, digital transformation, IoT, cybersecurity
- Services: End-to-End IoT, AI & Machine Learning, System Integrator (ERP/SCADA), Digital Security, FEWS Camera, Software Dev
- Products: IoT Sensors, ERP Connect, Smart Dashboards, Security Hub, Photogrammetry, Cloud Bridge
- RPMS Aftech: Resource Planning & Management System at rpms-portal.vercel.app
- Contact: WhatsApp +62 822 3183 4977, Email sales@aftech.co.id

Be concise, professional, and helpful. Answer in Indonesian or English as the user prefers.`;

const FALLBACK_RESPONSES: Record<string, string> = {
  default: `Selamat datang di AFTECH! Saya asisten virtual AFTECH. Saya bisa membantu Anda menjelajahi layanan dan produk kami, termasuk IoT, AI/ML, System Integration, Cybersecurity, dan banyak lagi.

Ada yang bisa saya bantu hari ini?`,
  products: `AFTECH memiliki beberapa produk unggulan:

1. **IoT Sensors** — Sensor industri untuk monitoring mesin, lingkungan, dan logistik
2. **ERP Connect** — Platform integrasi untuk menghubungkan ERP lama dengan sistem modern
3. **Smart Dashboards** — Visualisasi real-time untuk data-driven decisions
4. **Security Hub** — Platform keamanan jaringan enterprise-grade
5. **Photogrammetry** — Pemetaan 3D dan surveillance dengan fixed-wing UAV
6. **Cloud Bridge** — Migrasi data enterprise ke cloud dengan aman

Produk mana yang ingin Anda ketahui lebih lanjut?`,
  services: `Layanan unggulan AFTECH:

1. **End-to-End IoT** — Solusi IoT lengkap dari sensor hingga dashboard
2. **AI & Machine Learning** — Predictive maintenance dan automation
3. **System Integrator** — Integrasi ERP, SCADA, dan sistem enterprise
4. **Digital Security** — Audit keamanan, penetration testing, dan SOC
5. **FEWS Camera** — Fire Early Warning System dengan kamera thermal
6. **Software Dev** — Pengembangan web, mobile, dan API

Ada yang menarik minat Anda?`,
  contact: `Anda bisa menghubungi AFTECH melalui:

📞 **WhatsApp/Mobile:** +62 822 3183 4977
📞 **Office:** +62 822 3183 4977
📧 **Email:** sales@aftech.co.id

📍 **Headquarters:** Jl. Lingkar Timur 23, Karangkandri, Kesugihan, Cilacap, Jawa Tengah 53274
📍 **Jakarta Branch:** Gedung AFTECH, Jl. Mega Kuningan, Setiabudi, Jakarta Selatan 12950`,
  rpms: `**RPMS Aftech** (Resource Planning & Management System) adalah sistem perencanaan dan manajemen sumber daya enterprise yang terintegrasi dengan ERP Connect.

Fitur utama:
- Real-time ERP Sync
- Enterprise Resource Planning
- Multi-module Architecture

Kunjungi: https://rpms-portal.vercel.app/`,
};

function getFallbackResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (lower.includes("produk") || lower.includes("product") || lower.includes("barang"))
    return FALLBACK_RESPONSES.products;
  if (
    lower.includes("layanan") ||
    lower.includes("service") ||
    lower.includes("jasa")
  )
    return FALLBACK_RESPONSES.services;
  if (
    lower.includes("kontak") ||
    lower.includes("contact") ||
    lower.includes("telepon") ||
    lower.includes("email") ||
    lower.includes("alamat") ||
    lower.includes("address")
  )
    return FALLBACK_RESPONSES.contact;
  if (lower.includes("rpms") || lower.includes("resource planning"))
    return FALLBACK_RESPONSES.rpms;
  return FALLBACK_RESPONSES.default;
}

const encoder = new TextEncoder();

async function streamGroq(
  controller: ReadableStreamDefaultController,
  messages: { role: string; content: string }[]
) {
  const res = await fetch(GROQ_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10),
      ],
      stream: true,
      max_tokens: 1024,
    }),
  });

  if (!res.ok || !res.body) {
    throw new Error(`Groq API error: ${res.status}`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const data = line.slice(6).trim();
      if (data === "[DONE]") continue;
      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices?.[0]?.delta?.content || "";
        if (content) {
          controller.enqueue(encoder.encode(content));
        }
      } catch {}
    }
  }
}

async function streamFallback(
  controller: ReadableStreamDefaultController,
  text: string
) {
  let sent = 0;
  while (sent < text.length) {
    const chunk = text.slice(sent, sent + 12);
    sent += 12;
    controller.enqueue(encoder.encode(chunk));
    await new Promise((r) => setTimeout(r, 8));
  }
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const userMessage = messages?.[messages.length - 1]?.content || "";

    const stream = new ReadableStream({
      async start(controller) {
        try {
          if (GROQ_API_KEY) {
            await streamGroq(controller, messages);
          } else {
            await streamFallback(controller, getFallbackResponse(userMessage));
          }
        } catch {
          await streamFallback(controller, getFallbackResponse(userMessage));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch {
    return Response.json(
      { message: "Maaf, terjadi kesalahan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
