export const metadata = {
  title: "Hello World",
  description: "A clean and approachable application built with Next.js",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-(--color-background)">
      <h1 className="text-4xl font-bold text-(--color-primary)">Hello World</h1>
    </div>
  );
}
