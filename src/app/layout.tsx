import BottomNavigation from "@/components/BottomNavigation";
import FullPage from "@/components/FullPage";
import "@/styles/globals.css";
import { geistMono, geistSans } from "@/utils/fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Risale-i Nur Okuma Takibi",
    absolute: "Risale-i Nur Okuma Takibi",
    default: "Risale-i Nur Okuma Takibi",
  },
  description: "Risale-i Nur okuma takibi uygulaması",
  icons: "./favicon.ico",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FullPage>{children}</FullPage>
        <BottomNavigation />
      </body>
    </html>
  );
}
