"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { savePage } from "@/lib/actions/page";
import { useState } from "react";

function CustomCountInput() {
  const [pagesRead, setPagesRead] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  async function handlePageEntry() {
    setLoading(true);
    await savePage(pagesRead);
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center gap-y-2">
      <Input
        type="number"
        placeholder="Sayfa sayısı girin..."
        className="mt-2 block w-full"
        onChange={(e) => setPagesRead(Number(e.target.value))}
      />
      <Button
        onClick={() => handlePageEntry()}
        className="mt-2 block w-full"
        disabled={loading}
      >
        {loading ? "Loading..." : "Kaydet"}
      </Button>
    </div>
  );
}

export default CustomCountInput;
