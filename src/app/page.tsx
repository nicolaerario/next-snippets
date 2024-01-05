import db from '@/db';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';

export default async function Home() {
  // Disable cache
  noStore();

  const snippets = await db.snippet.findMany();

  return (
    <div className="flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <h1 className="text-3xl font-bold">Snippets</h1>
        <Link
          href={'/snippets/new'}
          className="rounded border p-2"
        >
          New
        </Link>
      </div>
      {/* Empty list of snippets */}
      {snippets.length < 1 && (
        <div className="rounded-md border-l-4 border-black bg-gray-100 p-4">
          <p className="text-sm font-medium">There are no snippets yet, please add one</p>
        </div>
      )}
      {/* List of snippets */}
      {snippets.length >= 1 &&
        snippets.map((snippet) => (
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
