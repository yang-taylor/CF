'use client'

import { FormEvent } from 'react';
import { useState } from "react";
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  // const pathname = usePathname();
  // const params = useSearchParams();
  // const router = useRouter()

  const [verificationSent, setVerificationSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // const formData = new FormData(event.currentTarget);
    // const email = formData.get('email');
    // const user_type = localStorage.getItem('user_type');

    setVerificationSent(true);
    console.log(verificationSent);

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
                    { (localStorage.getItem('user_type') == 'student') ?
                        <label htmlFor="email"
                          className="text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        >
                            School Email Address
                        </label>
                    :
                        <label htmlFor="email"
                          className="text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        >
                            Email Address
                        </label>
                    }
                    <input type="email" name="email" required
                      placeholder="example@ncsu.edu"
                      className="rounded-full border border-solid text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    />
                </div>
                <div className="py-4">
                { verificationSent ?
                  <>
                    <label htmlFor="verification_code"
                      className="text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    >
                        Verification Code (Check Email)
                    </label>
                    <input type="verification_code" name="verification_code" required
                      className="rounded-full border border-solid text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    />
                  </>
                :
                  <></>
                }
                </div>
                <button
                    type="submit"
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                >
                    Enter
                </button>
            </form>
        </div>
      </main>
    </div>
  );
}
