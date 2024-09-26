import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import PageCountButton from "@/components/PageCountButton";
import { BookOpen } from "lucide-react";

function HomeContainer() {
  const pages: number[] = [5, 10, 15, 20, 25, 30];

  return (
    <Card>
      <h1 className="mb-6 flex items-center justify-center text-center text-2xl font-bold">
        <BookOpen className="mr-2 inline-block" />
        Risale Okuma Takibi
      </h1>
      <div>
        <p className="mb-4 text-center">Bugün kaç sayfa okudunuz?</p>
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {pages.map((page) => (
            <PageCountButton key={page} pages={page} />
          ))}
        </div>
        <hr className="mb-4 border-t border-gray-300 dark:border-gray-700" />
        <p className="mb-2 text-center text-stone-400">
          Yukarıdakilerden farklı bir sayfa sayısı girmek için aşağıdaki alana
          girin.
        </p>
        <div className="flex flex-col items-center gap-y-2">
          <Input
            type="number"
            placeholder="Veya sayfa sayısı girin"
            className="mt-2 block w-full"
            //onChange={(e) => setPagesRead(Number(e.target.value))}
          />
          <Button
            //onClick={() => setPagesRead(pagesRead)}
            className="mt-2 block w-full"
          >
            Kaydet
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default HomeContainer;
