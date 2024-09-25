import { ChartArea, Home, ListOrdered, User } from "lucide-react";
import BottomNavigationItem from "./BottomNavigationItem";

function BottomNavigation() {
  return (
    <div className="fixed bottom-4 z-50 w-full">
      <div className="w-full px-3">
        <div className="h-16 rounded-2xl border border-gray-200 bg-cardLight dark:border-zinc-800 dark:bg-cardDark">
          <div className="mx-auto flex h-full max-w-lg grid-cols-5 justify-around">
            <BottomNavigationItem href="/" icon={<Home />} />
            <BottomNavigationItem href="/report" icon={<ChartArea />} />
            <BottomNavigationItem href="/leaderboard" icon={<ListOrdered />} />
            <BottomNavigationItem href="/profile" icon={<User />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
