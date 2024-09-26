function LeaderBoardSkeleton() {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs capitalize text-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sıra
              </th>
              <th scope="col" className="px-6 py-3">
                Kullanıcı Adı
              </th>
              <th scope="col" className="px-6 py-3">
                Sayfa Sayısı
              </th>
            </tr>
          </thead>
          <tbody className="gap-y-2">
            {[...Array(5)].map((_, index) => (
              <tr className="border-b dark:border-gray-700" key={index}>
                <td className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></td>
                <th
                  scope="row"
                  className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"
                ></th>
                <td className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoardSkeleton;
