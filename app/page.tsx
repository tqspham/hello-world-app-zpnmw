export const metadata = {
  title: "Home - Hello World",
  description: "A clean and approachable application built with Next.js",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-(--color-background) transition-colors">
      <h1 className="text-4xl font-bold text-(--color-primary) transition-colors">Hello World</h1>
    </div>
  );
}
