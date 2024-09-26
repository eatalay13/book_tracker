import RegisterContainer from "@/containers/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayıt Ol",
  description: "Kullanıcı kaydı oluşturun",
};

function RegisterPage() {
  return <RegisterContainer />;
}

export default RegisterPage;
