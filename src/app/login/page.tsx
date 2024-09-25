import LoginContainer from "@/containers/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giriş Yap",
  description: "Kullanıcı girişi yapın",
};

function LoginPage() {
  return <LoginContainer />;
}

export default LoginPage;
