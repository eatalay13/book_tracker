import { ReactNode } from "react";

interface FullPageProps {
  children: ReactNode;
}

function FullPage(props: FullPageProps) {
  return (
    <div className="bg-pageBackground flex min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}

export default FullPage;
