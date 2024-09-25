import { ChartArea, Home, Settings, User } from "lucide-react";
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
        <div
          id="tooltip-new"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Yeni Sayfa Sayısı Ekle
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <Settings />
          <span className="sr-only">Settings</span>
        </button>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Ayarlar
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-profile"
          type="button"
          className="group inline-flex flex-col items-center justify-center rounded-e-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <User />
          <span className="sr-only">Profile</span>
        </button>
        <div
          id="tooltip-profile"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Profil
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
