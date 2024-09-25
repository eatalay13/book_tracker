"use client";

import { motion } from "framer-motion";
import { BookOpen, ChevronRight, LogIn } from "lucide-react";
import { useState } from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className = "" }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors ${className}`}
  >
    {children}
  </button>
);

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ type, placeholder, onChange, className = "" }: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [pagesRead, setPagesRead] = useState<number>(0);
  const [hasEnteredToday, setHasEnteredToday] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handlePageEntry = (pages: number) => {
    setPagesRead(pages);
    setHasEnteredToday(true);
  };

  const PageButton = ({ pages }: { pages: number }) => (
    <Button onClick={() => handlePageEntry(pages)} className="min-w-20">
      {pages}
    </Button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl m-5">
        <h1 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
          <BookOpen className="inline-block mr-2" />
          Risale Okuma Takibi
        </h1>
        {!isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={handleLogin}
              className="w-full flex items-center justify-center"
            >
              <LogIn className="mr-2" /> Giriş Yap
            </Button>
          </motion.div>
        ) : hasEnteredToday ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center mb-4">Bugün için giriş yaptınız!</p>
            <Button className="w-full flex items-center justify-center">
              Raporları Görüntüle <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        ) : (
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
            <p className="text-center mb-4">Ya da sayfa sayısını girin:</p>
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
        )}
      </div>
    </div>
  );
}
