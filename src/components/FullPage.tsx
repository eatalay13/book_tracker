import { ReactNode } from "react";

interface FullPageProps {
  children: ReactNode;
}

function FullPage(props: FullPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-100 dark:bg-zinc-900">
      {props.children}
    </div>
  );
}

export default FullPage;
