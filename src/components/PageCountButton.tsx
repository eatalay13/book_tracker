import { savePage } from "@/lib/actions/page";
import Button from "./Button";

interface PageCountButtonProps {
  pages: number;
}

function PageCountButton(props: PageCountButtonProps) {
  const handlePageEntry = async (pages: number) => {
    savePage(pages);
  };

  return (
    <Button onClick={() => handlePageEntry(props.pages)} className="min-w-20">
      {props.pages}
    </Button>
  );
}

export default PageCountButton;
