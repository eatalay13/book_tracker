import Card from "@/components/Card";
import LeaderBoardSkeleton from "@/components/Skeleton/LeaderBoardSkeleton";
import { Suspense } from "react";
import LeaderboardTable from "./LeaderboardTable";

function LeaderboardContainer() {
  return (
    <Card>
      <div className="mb-2 flex items-center justify-center">
        <h2 className="text-xl">Liderlik Tablosu</h2>
      </div>
      <hr className="border-1 border-gray-200 dark:border-gray-700" />
      <Suspense fallback={<LeaderBoardSkeleton />}>
        <LeaderboardTable />
      </Suspense>
    </Card>
  );
}

export default LeaderboardContainer;
