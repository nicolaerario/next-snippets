import { deleteSnippet } from '@/actions';
import db from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function ShowSnippetPage({ params }: Props) {
  const snippet = await db.snippet.findUnique({
    where: { id: params.id },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="py-4">
      <Link
        className="rounded bg-black p-2 text-white"
        href={'/'}
      >
        Back
      </Link>
      <div className="flex items-center justify-between py-4">
        <h3 className="text-xl font-bold">{snippet.title}</h3>
        <div className="flex gap-4">
          <Link
            className="rounded border p-2"
            href={`/snippets/${snippet.id}/edit`}
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="rounded border p-2">Delete</button>
          </form>
        </div>
      </div>
      <pre className="rounded border border-gray-200 bg-gray-200 p-3">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => ({ id: snippet.id }));
}
