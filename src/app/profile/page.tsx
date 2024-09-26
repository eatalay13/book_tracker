import { auth } from "@/auth";

async function ProfilePage() {
  const session = await auth();

  if (!session?.user) return <div>Giriş Yap...</div>;

  return (
    <div>
      <h1>Profil Sayfası</h1>
      <p>Merhaba, {session.user.name}</p>
      <p>Ad: {session.user.firstname}</p>
      <p>Soyad: {session.user.lastname}</p>
      <p>Telefon: {session.user.phone}</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
}

export default ProfilePage;
