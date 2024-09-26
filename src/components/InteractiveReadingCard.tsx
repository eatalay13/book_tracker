"use client";

import { Book, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const InteractiveReadingCard = () => {
  const [booksRead, setBooksRead] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const calculateLevel = (books: number) => Math.floor(books / 5) + 1;
  const calculateProgress = (books: number) => (books % 5) * 20;

  const level = calculateLevel(booksRead);
  const progress = calculateProgress(booksRead);

  const handleIncrement = () => setBooksRead((prev) => prev + 1);
  const handleDecrement = () =>
    setBooksRead((prev) => (prev > 0 ? prev - 1 : 0));

  const getLevelTitle = (level: number) => {
    const titles = [
      "Çaylak Okuyucu",
      "Meraklı Okur",
      "Kitap Kurdu",
      "Bilge Okuyucu",
      "Efsane Okur",
    ];
    return titles[Math.min(level - 1, titles.length - 1)];
  };

  return (
    <div className="mx-auto mb-5 max-w-sm overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <Book className="text-white" size={32} />
          <div className="text-xl font-bold text-white">Seviye {level}</div>
        </div>
        <h2 className="text-2xl font-bold text-white">
          {getLevelTitle(level)}
        </h2>
        <div className="relative pt-1">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <span className="inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase text-blue-600">
                İlerleme
              </span>
            </div>
            <div className="text-right">
              <span className="inline-block text-xs font-semibold text-white">
                {progress}%
              </span>
            </div>
          </div>
          <div className="mb-4 flex h-2 overflow-hidden rounded bg-white bg-opacity-30 text-xs">
            <div
              style={{ width: `${progress}%` }}
              className="flex flex-col justify-center whitespace-nowrap bg-white text-center text-white shadow-none"
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleDecrement}
            className="rounded-full bg-white bg-opacity-20 p-2"
          >
            <ChevronDown className="text-white" size={24} />
          </button>
          <span className="text-2xl font-bold text-white">
            {booksRead} Kitap
          </span>
          <button
            onClick={handleIncrement}
            className="rounded-full bg-white bg-opacity-20 p-2"
          >
            <ChevronUp className="text-white" size={24} />
          </button>
        </div>
      </div>
      <div className="bg-white bg-opacity-20">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full p-4 font-medium text-white focus:outline-none"
        >
          {showDetails ? "Detayları Gizle" : "Detayları Göster"}
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showDetails ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 text-white">
            <p>Sonraki seviye için: {5 - (booksRead % 5)} kitap</p>
            <p>Toplam puan: {booksRead * 10}</p>
            <p className="mt-2 font-semibold">
              İpucu: Her gün okuyarak seviye atla!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveReadingCard;
