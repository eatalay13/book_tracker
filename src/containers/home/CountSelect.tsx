import PageCountButton from "@/components/PageCountButton";
import CustomCountInput from "./CustomCountInput";

function CountSelect() {
  const pages: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  return (
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
      <CustomCountInput />
    </div>
  );
}

export default CountSelect;
