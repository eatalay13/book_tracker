"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavigationItemProps {
  icon: React.ReactNode;
  href: string;
}

function BottomNavigationItem(props: BottomNavigationItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={props.href}
      className="group inline-flex flex-col items-center justify-center"
    >
      <div
        className={clsx(
          "rounded-xl p-3 transition duration-500",
          pathname === props.href
            ? "bg-red-500 text-white dark:bg-red-700"
            : "bg-transparent",
        )}
      >
        {props.icon}
      </div>
    </Link>
  );
}

export default BottomNavigationItem;
