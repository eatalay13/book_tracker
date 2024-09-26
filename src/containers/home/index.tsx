import Card from "@/components/Card";
import InteractiveReadingCard from "@/components/InteractiveReadingCard";
import { PageCount } from "@prisma/client";
import { BookOpen } from "lucide-react";
import CountSelect from "./CountSelect";
import HasTodayData from "./HasTodayData";

interface HomeContainerProps {
  todayData?: PageCount | null;
}

function HomeContainer(props: HomeContainerProps) {
  return (
    <div className="space-y-5">
      <InteractiveReadingCard />
      {props.todayData ? (
        <HasTodayData pageCount={props.todayData.count} />
      ) : (
        <Card>
          <h1 className="mb-6 flex items-center justify-center text-center text-2xl font-bold">
            <BookOpen className="mr-2 inline-block" />
            Risale Okuma Takibi
          </h1>
          <CountSelect />
        </Card>
      )}
      <InteractiveReadingCard />
    </div>
  );
}

export default HomeContainer;
