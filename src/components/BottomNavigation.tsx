import { ChartArea, Home, ListOrdered, User } from "lucide-react";
import BottomNavigationItem from "./BottomNavigationItem";

function BottomNavigation() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-3xl border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700">
      <div className="mx-auto flex h-full max-w-lg grid-cols-5 justify-around">
        <BottomNavigationItem href="/" icon={<Home />} />
        <BottomNavigationItem href="/report" icon={<ChartArea />} />
        <BottomNavigationItem href="/leaderboard" icon={<ListOrdered />} />
        <BottomNavigationItem href="/profile" icon={<User />} />
      </div>
    </div>
  );
}

export default BottomNavigation;
