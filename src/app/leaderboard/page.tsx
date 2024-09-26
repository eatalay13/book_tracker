import { prisma } from "@/lib/prisma";

async function getLeaderboard() {
  const res = await prisma.user.findMany({
    select: {
      username: true,
      PageCount: {
        select: {
          count: true,
        },
      },
    },
    orderBy: {
      PageCount: {
        _count: "desc",
      },
    },
  });

  return res.map((user) => ({
    username: user.username,
    PageCount: user.PageCount,
  }));
}

async function Leaderboard() {
  const leaderboard = await getLeaderboard();

  return (
    <div>
      <h1>Liderlik Tablosu</h1>
      <table>
        <thead>
          <tr>
            <th>Kullanıcı Adı</th>
            <th>Sayfa Sayısı</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user.username}>
              <td>
                {index + 1}. {user.username}
              </td>
              <td>
                {user.PageCount.map((count) => {
                  return count.count;
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
