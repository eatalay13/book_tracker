import { ReactNode } from "react";

interface FullPageProps {
  children: ReactNode;
}

function FullPage(props: FullPageProps) {
  return (
    <div className="mb-24 flex items-start justify-center p-3">
      {props.children}
    </div>
  );
}

export default FullPage;
