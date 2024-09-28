'use client'

import { FormEvent } from 'react';
import { usePathname } from 'next/navigation';

import Link from "next/link";

export default function LoginPage() {
  const router = usePathname();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')

    // if (email != null && email.valueOf.toString.endsWith('@ncsu.edu')) {

    // }

    // const response = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'aplication/json'},
    //     body: JSON.stringify({email}),
    // })
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
            <h1>Please log in.</h1>
            <form onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center"
            >
                <div className="py-4">
                    <label for="email"
                      className="text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    >
                        School Email Address
                    </label>
                    <input type="email" name="email" required
                      placeholder="example@ncsu.edu"
                      className="rounded-full border border-solid text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    />
                </div>
                <button
                    type="submit"
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                >
                    Login
                </button>
            </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home →
        </a>
      </footer>
    </div>
  );
}
