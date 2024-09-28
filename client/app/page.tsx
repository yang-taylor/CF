'use client'

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the [TEST] Event Management Page.</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            key="student"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() =>
              {
                localStorage.setItem('user_type', 'student');
                router.push('/login');
              }
            }
          >
            I am a student.
          </button>
          <button
            key="representative"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() =>
              {
                localStorage.setItem('user_type', 'representative');
                router.push('/login');
              }
            }
          >
            I am a company representative.
          </button>
        </div>
      </main>
    </div>
  );
}
