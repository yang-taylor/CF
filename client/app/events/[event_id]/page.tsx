'use client'

import useSWR from 'swr';

export default function EventPage( {params} ) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'http://localhost:3333/api/events/' + params.event_id,
    fetcher
  );

  if (error) return <p>Failed to load.</p>
  if (isLoading) return <p>Loading...</p>

  const ms_in_day = 24*60*60*1000;

  const date_options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  const time_options = {
    hour: "2-digit",
    minute: "2-digit"
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>{data.title}</h1>
        <ul>
            {((new Date(data.end_date) - new Date(data.start_date)) / ms_in_day > 1) ?
                <li>
                    Multi-day event.
                </li>
                :
                <>
                    <li>
                        {new Date(data.start_date).toLocaleDateString("en-US", date_options)}
                    </li>
                    <li>
                        {new Date(data.start_date).toLocaleTimeString("en-US", time_options)}-{new Date(data.end_date).toLocaleTimeString("en-US", time_options)}
                    </li>
                </>
            }
            <li>{data.location}</li>
            <li>Room(s): {data.room}</li>
        </ul>
      </main>
    </div>
  );
}
