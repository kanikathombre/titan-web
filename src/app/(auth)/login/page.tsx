import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4">
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
      </div>
    </div>
  );
}