import HomeContainer from "@/containers/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa sayısı Gir",
  description: "Risale-i Nur okuma takibi uygulaması",
};

export default function Home() {
  return <HomeContainer />;
}
