import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="text-5xl p-6">
        NextJs Starter Code with shadcn
      </div>
      <Button>Click me</Button>
    </main>
  );
}
