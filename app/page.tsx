export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-800 to-amber-900 text-white p-8">
      <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-wider drop-shadow-lg">
        Unfactory
      </h1>
      <p className="text-3xl md:text-5xl font-light mb-8 italic opacity-90">
        Reclaim. Restore. Reuse.
      </p>
      <p className="text-2xl md:text-3xl mb-12 text-center max-w-2xl">
        Beautiful things coming soon.
      </p>
      <div className="text-xl md:text-2xl flex items-center gap-4">
        <span className="opacity-80">Drop me a line:</span>
        <a href="mailto:antony@unfactory.co.uk" className="underline hover:text-amber-200 transition">
          antony@unfactory.co.uk
        </a>
      </div>
    </main>
  );
}