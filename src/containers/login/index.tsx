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
          Kitap Okuma Takibi
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Kullanıcı Adı
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Kullanıcı adınız"
                //value={username}
                //onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Şifre
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="password"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Şifreniz"
                //value={password}
                //onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full flex items-center justify-center"
          >
            Giriş Yap
          </Button>
        </form>
      </Card>
    </FullPage>
  );
}

export default LoginContainer;
