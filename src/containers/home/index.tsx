"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import FullPage from "@/components/FullPage";
import Input from "@/components/Input";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useState } from "react";

function HomeContainer() {
  const [pagesRead, setPagesRead] = useState<number>(0);

  const handlePageEntry = (pages: number) => {
    setPagesRead(pages);
  };

  const PageButton = ({ pages }: { pages: number }) => (
    <Button onClick={() => handlePageEntry(pages)} className="min-w-20">
      {pages}
    </Button>
  );

  return (
    <FullPage>
      <Card>
        <h1 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
          <BookOpen className="inline-block mr-2" />
          Risale Okuma Takibi
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center mb-4">Bugün kaç sayfa okudunuz?</p>
          <div className="flex flex-wrap justify-center mb-4 gap-2">
            {[5, 10, 15, 20, 25, 30].map((pages) => (
              <PageButton key={pages} pages={pages} />
            ))}
          </div>
          <hr className="border-t border-gray-300 mb-4" />
          <p className="text-center mb-2 text-stone-400">
            Yukarıdakilerden farklı bir sayfa sayısı girmek için aşağıdaki alana
            girin.
          </p>
          <div className="flex flex-col items-center">
            <Input
              type="number"
              placeholder="Veya sayfa sayısı girin"
              className="block w-full mt-2"
              onChange={(e) => setPagesRead(Number(e.target.value))}
            />
            <Button
              onClick={() => handlePageEntry(pagesRead)}
              className="block w-full mt-2"
            >
              Kaydet
            </Button>
          </div>
        </motion.div>
      </Card>
    </FullPage>
  );
}

export default HomeContainer;
