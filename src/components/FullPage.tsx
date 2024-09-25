import { ReactNode } from "react";

interface FullPageProps {
  children: ReactNode;
}

function FullPage(props: FullPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pageBackground p-3">
      {props.children}
    </div>
  );
}

export default FullPage;
