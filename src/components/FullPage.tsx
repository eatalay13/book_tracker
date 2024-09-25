import { ReactNode } from "react";

interface FullPageProps {
  children: ReactNode;
}

function FullPage(props: FullPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
      {props.children}
    </div>
  );
}

export default FullPage;
