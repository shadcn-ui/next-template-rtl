
import { ModeToggle } from "@/components/mode-toggle";
import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end p-4">
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <LoginForm />
      </main>
    </div>
  );
}
