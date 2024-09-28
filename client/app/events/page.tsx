'use client'

import Link from "next/link";
import useSWR from 'swr';
 
export default function EventListPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'http://localhost:3333/api/events',
    fetcher
  );

  if (error) return <p>Failed to load.</p>
  if (isLoading) return <p>Loading...</p>

  const date_options = {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  };

  console.log(data)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Select your event.</h1>
        { data.map((item: object) => {
            return(
              <Link
                key="{item.event_id}"
                href={`/events/${item.event_id}`}
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                {item.title}. {new Date(item.start_date).toLocaleString("en-US", date_options)}.
              </Link>
            )
        })}
      </main>
    </div>
  );
}
