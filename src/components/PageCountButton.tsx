"use client";

import Button from "./Button";

interface PageCountButtonProps {
  pages: number;
}

function PageCountButton(props: PageCountButtonProps) {
  const handlePageEntry = async (pages: number) => {
    const response = await fetch("/api/save-page", {
      method: "POST",
      body: JSON.stringify({ count: pages }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Page count saved successfully");
    } else {
      console.error("Page count save failed");
    }
  };

  return (
    <Button onClick={() => handlePageEntry(props.pages)} className="min-w-20">
      {props.pages}
    </Button>
  );
}

export default PageCountButton;
