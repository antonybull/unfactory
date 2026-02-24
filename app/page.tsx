export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-8xl md:text-10xl font-mono font-black tracking-tight mb-4">
        unfactory
      </h1>
      <p className="text-4xl md:text-6xl font-mono font-light tracking-wide mb-12">
        enough is enough
      </p>
      <div className="text-xl md:text-2xl flex items-center gap-4">
        <span className="opacity-80">drop me a line:</span>
        <a href="mailto:antony@unfactory.co.uk" className="underline hover:text-amber-200 transition">
          antony@unfactory.co.uk
        </a>
      </div>
    </main>
  );
}