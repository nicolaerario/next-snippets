import SnippetEditForm from '@/components/snippetEditForm';
import db from '@/db';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function SnippetEditPage({ params }: Props) {
  const id = Number(params.id);
  const snippet = await db.snippet.findUnique({ where: { id } });

  if (!snippet) return notFound();

  return <SnippetEditForm snippet={snippet} />;
}
