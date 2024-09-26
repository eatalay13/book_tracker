import Card from "@/components/Card";
import { prisma } from "@/lib/prisma";

async function getLeaderboard() {
  const leaderboard = await prisma.pageCount.groupBy({
    by: ["userId"],
    _sum: {
      count: true,
    },
    orderBy: {
      _sum: {
        count: "desc",
      },
    },
    take: 5,
  });

  const userIds = leaderboard.map((entry) => entry.userId);
  const users = await prisma.user.findMany({
    where: { id: { in: userIds } },
    select: { id: true, username: true },
  });

  return leaderboard.map((entry) => ({
    ...entry,
    user: users.find((user) => user.id === entry.userId),
  }));
}

async function Leaderboard() {
  const leaderboard = await getLeaderboard();

  return (
    <Card>
      <h1>Liderlik Tablosu</h1>

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
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry.userId} className="border-b dark:border-gray-700">
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {entry.user?.username}
                </th>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {entry._sum.count} Sayfa
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default Leaderboard;
