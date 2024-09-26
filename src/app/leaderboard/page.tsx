import LeaderboardContainer from "@/containers/leaderboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liderlik Tablosu",
  description: "Risale-i Nur okuma takibi uygulaması",
};

function Leaderboard() {
  return <LeaderboardContainer />;
}

export default Leaderboard;
