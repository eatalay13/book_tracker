import { auth } from "@/auth";
import Card from "@/components/Card";
import Link from "next/link";

async function ProfilePage() {
  const session = await auth();

  if (!session?.user) return <div>Giriş Yap...</div>;

  return (
    <Card>
      <h1>Profil Sayfası</h1>
      <p>Merhaba, {session.user.name}</p>
      <p>Ad: {session.user.firstname}</p>
      <p>Soyad: {session.user.lastname}</p>
      <p>Telefon: {session.user.phone}</p>
      <p>Email: {session.user.email}</p>
      <Link
        href="/api/auth/signout"
        className="mt-3 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
      >
        Çıkış Yap
      </Link>
    </Card>
  );
}

export default ProfilePage;
