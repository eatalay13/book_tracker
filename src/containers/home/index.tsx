import Card from "@/components/Card";
import { PageCount } from "@prisma/client";
import { BookOpen } from "lucide-react";
import CountSelect from "./CountSelect";
import HasTodayData from "./HasTodayData";

interface HomeContainerProps {
  todayData?: PageCount | null;
}

function HomeContainer(props: HomeContainerProps) {
  return (
    <Card>
      <h1 className="mb-6 flex items-center justify-center text-center text-2xl font-bold">
        <BookOpen className="mr-2 inline-block" />
        Risale Okuma Takibi
      </h1>
      {props.todayData ? (
        <HasTodayData pageCount={props.todayData.count} />
      ) : (
        <CountSelect />
      )}
    </Card>
  );
}

export default HomeContainer;
