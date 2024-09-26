"use client";

import { savePage } from "@/lib/actions/page";
import { useState } from "react";
import Button from "./Button";

interface PageCountButtonProps {
  pages: number;
}

function PageCountButton(props: PageCountButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePageEntry = async (pages: number) => {
    setLoading(true);
    await savePage(pages);
    setLoading(false);
  };

  if (loading) {
    return (
      <Button className="min-w-20" disabled>
        Loading...
      </Button>
    );
  }

  return (
    <Button onClick={() => handlePageEntry(props.pages)} className="min-w-20">
      {props.pages}
    </Button>
  );
}

export default PageCountButton;
