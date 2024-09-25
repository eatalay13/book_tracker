import { ChartArea, Home, ListOrdered, User } from "lucide-react";
import BottomNavigationItem from "./BottomNavigationItem";

function BottomNavigation() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-lg">
      <div className="bg-cardLight dark:bg-cardDark h-16 -translate-x-1/2 rounded-2xl border border-gray-200 dark:border-zinc-800">
        <div className="mx-auto flex h-full max-w-lg grid-cols-5 justify-around">
          <BottomNavigationItem href="/" icon={<Home />} />
          <BottomNavigationItem href="/report" icon={<ChartArea />} />
          <BottomNavigationItem href="/leaderboard" icon={<ListOrdered />} />
          <BottomNavigationItem href="/profile" icon={<User />} />
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
