import { ChartArea, Home, ListOrdered, User } from "lucide-react";
import Link from "next/link";

function BottomNavigation() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700">
      <div className="mx-auto flex h-full max-w-lg grid-cols-5 justify-around">
        <Link
          href="/"
          className="group inline-flex flex-col items-center justify-center rounded-s-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <Home />
          <span className="sr-only">Anasayfa</span>
        </Link>
        <Link
          href="/report"
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <ChartArea />
          <span className="sr-only">Raporlar</span>
        </Link>
        <Link
          href="/leaderboard"
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <ListOrdered />
          <span className="sr-only">Okuma Sıralaması</span>
        </Link>
        <Link
          href="/profile"
          className="group inline-flex flex-col items-center justify-center rounded-e-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <User />
          <span className="sr-only">Profile</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavigation;
