import BottomNavigation from "@/components/BottomNavigation";
import FullPage from "@/components/FullPage";
import "@/styles/globals.css";
import { geistMono, geistSans } from "@/utils/fonts";
import { siteMetadata, siteViewport } from "@/utils/metaConfig";
import { ReactNode } from "react";

export const metadata = siteMetadata;

export const viewport = siteViewport;

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-pageBackground antialiased`}
      >
        <FullPage>{children}</FullPage>
        <BottomNavigation />
      </body>
    </html>
  );
}
