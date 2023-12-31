import db from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div className="flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        <h3 className="text-3xl font-bold">Snippets</h3>
        <Link
          href={'/snippets/new'}
          className="rounded border p-2"
        >
          New
        </Link>
      </div>
      {/* List of snippets */}
      {snippets.map((snippet) => (
        <Link
          key={snippet.id}
          href={`/snippets/${snippet.id}`}
          className="flex items-center justify-between rounded border p-2"
        >
          {snippet.title}
          <span>View</span>
        </Link>
      ))}
    </div>
  );
}
