'use client'

export default function TosPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Terms of Service</h1>
        <h1>Privacy Policy</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
          rel="noopener noreferrer"
        >
          About
        </a>
      </footer>
    </div>
  );
}
