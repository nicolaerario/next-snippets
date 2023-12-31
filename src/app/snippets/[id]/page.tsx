import db from '@/db';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function ShowSnippetPage({ params }: Props) {
  const snippet = await db.snippet.findUnique({
    where: { id: Number(params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
