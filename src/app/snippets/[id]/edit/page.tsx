import SnippetEditForm from '@/components/snippetEditForm';
import db from '@/db';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function SnippetEditPage({ params }: Props) {
  const id = params.id;
  const snippet = await db.snippet.findUnique({ where: { id } });

  if (!snippet) return notFound();

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Edit Snippet</h3>
        <div className="text-xl italic">{snippet.title}</div>
      </div>

      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
