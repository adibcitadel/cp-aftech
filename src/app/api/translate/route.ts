const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_BASE_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

export async function POST(request: Request) {
  let text: string | string[] = "";
  try {
    const body = await request.json();
    text = body.text;
    const targetLang = body.targetLang;
    const sourceLang = body.sourceLang || "id";

    if (!text || !targetLang) {
      return Response.json({ error: "Missing text or targetLang" }, { status: 400 });
    }

    if (!GROQ_API_KEY) {
      return Response.json({ translated: text });
    }

    const langNames: Record<string, string> = { id: "Indonesian", en: "English" };
    const targetName = langNames[targetLang] || targetLang;
    const sourceName = langNames[sourceLang] || sourceLang;

    const systemPrompt = `You are a translator. Translate the following text from ${sourceName} to ${targetName}. 
Rules:
- Preserve all HTML tags, markdown formatting, and line breaks exactly as-is.
- Do not add any explanations, notes, or extra text.
- Only return the translated text, nothing else.
- If the text is already in ${targetName}, return it unchanged.`;

    const userPrompt = Array.isArray(text) ? text.join("\n---SEPARATOR---\n") : text;

    const res = await fetch(GROQ_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.1,
        max_tokens: 4096,
      }),
    });

    if (!res.ok) {
      return Response.json({ translated: Array.isArray(text) ? text : text });
    }

    const data = await res.json();
    let translated = data.choices?.[0]?.message?.content || text;

    if (Array.isArray(text)) {
      const parts = translated.split("---SEPARATOR---");
      translated = parts.map((p: string, i: number) => p.trim() || text[i]);
    }

    return Response.json({ translated });
  } catch {
    return Response.json({ translated: text });
  }
}
