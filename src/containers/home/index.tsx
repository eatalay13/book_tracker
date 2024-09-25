"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import FullPage from "@/components/FullPage";
import Input from "@/components/Input";
import PageCountButton from "@/components/PageCountButton";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useState } from "react";

function HomeContainer() {
  const [pagesRead, setPagesRead] = useState<number>(0);

  const pages: number[] = [5, 10, 15, 20, 25, 30];

  return (
    <FullPage>
      <Card>
        <h1 className="mb-6 flex items-center justify-center text-center text-2xl font-bold">
          <BookOpen className="mr-2 inline-block" />
          Risale Okuma Takibi
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-4 text-center">Bugün kaç sayfa okudunuz?</p>
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {pages.map((page) => (
              <PageCountButton key={page} pages={page} />
            ))}
          </div>
          <hr className="mb-4 border-t border-gray-300" />
          <p className="mb-2 text-center text-stone-400">
            Yukarıdakilerden farklı bir sayfa sayısı girmek için aşağıdaki alana
            girin.
          </p>
          <div className="flex flex-col items-center">
            <Input
              type="number"
              placeholder="Veya sayfa sayısı girin"
              className="mt-2 block w-full"
              onChange={(e) => setPagesRead(Number(e.target.value))}
            />
            <Button
              onClick={() => setPagesRead(pagesRead)}
              className="mt-2 block w-full"
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
