import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center px-10 text-center md:w-2/3">
        <h2 className="text-4xl font-bold">
          Discover your ideal country based on data-driven decision making.
        </h2>
        <h3 className="py-5 text-xl font-semibold">
          Embark on a journey of informed choices.
        </h3>
      </div>
      <Button>Button</Button>
    </main>
  );
}
