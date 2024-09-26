import { Award, Book } from "lucide-react";

interface HasTodayDataProps {
  pageCount: number;
}

function HasTodayData({ pageCount }: HasTodayDataProps) {
  const motivationalMessages = [
    "Harika iş! Okumaya devam et ve zihnini geliştir.",
    "Bir kitap, bir dünya demektir. Bugün yeni bir dünya keşfettin!",
    "Okumak, ruhun gıdasıdır. Bugün ruhunu besledin!",
    "Her sayfa yeni bir macera. Maceraya devam et!",
  ];

  const randomMessage =
    motivationalMessages[
      Math.floor(Math.random() * motivationalMessages.length)
    ];

  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-orange-500 shadow-lg dark:from-green-800 dark:to-orange-800">
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-center">
          <Book className="mr-2 text-white" size={28} />
          <h4 className="text-lg font-semibold text-white">
            Günlük Okuma Başarısı!
          </h4>
        </div>
        <div className="text-center text-white">
          <p className="text-opacity-90">{randomMessage}</p>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <Award className="text-yellow-300" size={24} />
          <span className="font-semibold text-white">
            {pageCount} sayfa okudunuz.
          </span>
        </div>
      </div>
      <div className="bg-white bg-opacity-20 p-4">
        <p className="text-center font-medium text-white">
          Yarın da okumayı unutma! 📚
        </p>
      </div>
    </div>
  );
}

export default HasTodayData;
