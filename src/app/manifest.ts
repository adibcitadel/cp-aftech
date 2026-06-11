import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AFTECH | Enterprise Technology & Digital Ecosystem",
    short_name: "AFTECH",
    description:
      "Strategic technology partner for IT infrastructure, software engineering, IoT, and cybersecurity in Indonesia.",
    start_url: "/",
    display: "standalone",
    background_color: "#000511",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
