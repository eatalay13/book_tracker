import ReportContainer from "@/containers/report";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raporlar",
  description: "Risale-i Nur okuma takibi raporları",
};

function ReportPage() {
  return <ReportContainer />;
}

export default ReportPage;
