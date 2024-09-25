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
            {pages.map((page) => (
              <PageCountButton key={page} pages={page} />
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
              onClick={() => setPagesRead(pagesRead)}
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
