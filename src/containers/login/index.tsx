import Button from "@/components/Button";
import Card from "@/components/Card";
import FullPage from "@/components/FullPage";
import Input from "@/components/Input";
import { BookOpen, Lock, User } from "lucide-react";

function LoginContainer() {
  return (
    <FullPage>
      <Card>
        <h1 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
          <BookOpen className="inline-block mr-2" />
          Giriş Yap
        </h1>
        <form className="gap-y-4" id="risale-login">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Kullanıcı Adı
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              {" "}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>{" "}
              <Input
                id="username"
                name="username"
                type="text"
                className="block w-full pl-10"
                placeholder="Kullanıcı adınız"
                //value={username}
                //onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Şifre
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>{" "}
              <Input
                id="password"
                name="password"
                type="password"
                className="block w-full pl-10"
                placeholder="Şifreniz"
                //value={password}
                //onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit" className="mt-4 w-full">
            Giriş Yap
          </Button>
        </form>
      </Card>
    </FullPage>
  );
}

export default LoginContainer;
