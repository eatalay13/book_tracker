import Button from "./Button";

interface PageCountButtonProps {
  pages: number;
}

function PageCountButton(props: PageCountButtonProps) {
  const handlePageEntry = (pages: number) => {
    alert(`You have read ${pages} pages`);
  };

  return (
    <Button onClick={() => handlePageEntry(props.pages)} className="min-w-20">
      {props.pages}
    </Button>
  );
}

export default PageCountButton;
