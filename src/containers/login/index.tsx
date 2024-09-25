import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import { BookOpen, Lock, User } from "lucide-react";

function LoginContainer() {
  return (
    <Card>
      <h1 className="mb-6 flex items-center justify-center text-center text-2xl font-bold">
        <BookOpen className="mr-2 inline-block" />
        Giriş Yap
      </h1>
      <form className="w-full gap-y-4" id="risale-login">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Kullanıcı Adı
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <User className="h-5 w-5 text-gray-400" />
            </div>
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
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
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
  );
}

export default LoginContainer;
