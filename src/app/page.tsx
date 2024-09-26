import { auth } from "@/auth";
import HomeContainer from "@/containers/home";
import { hasTodayData } from "@/data/pageRepo";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sayfa sayısı Gir | Risale-i Nur Okuma Takibi",
  description: "Risale-i Nur okuma takibi uygulaması",
};

async function HomePage() {
  const session = await auth();

  if (!session?.user) redirect("/api/auth/signin");

  const todayData = await hasTodayData(Number(session.user.id));

  return <HomeContainer todayData={todayData} />;
}

export default HomePage;
