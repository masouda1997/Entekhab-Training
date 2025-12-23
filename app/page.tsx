import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-black  gap-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 dir="rtl" className="text-4xl">
          {" "}
          پروژه بیس{" "}
        </h1>
      </main>
    </div>
  );
}
