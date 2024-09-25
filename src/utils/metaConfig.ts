import { Metadata, Viewport } from "next";

export const siteMetadata: Metadata = {
  title: {
    template: "%s | Risale-i Nur Okuma Takibi",
    default: "Risale-i Nur Okuma Takibi",
  },
  description: "Risale-i Nur okuma takibi uygulaması",
  icons: "./favicon.ico",
};

export const siteViewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  height: "device-height",
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    {
      color: "#def4ff",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#161616",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};
