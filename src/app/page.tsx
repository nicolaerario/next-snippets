import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      {snippets.map((snippet) => (
        <li key={snippet.id}>{snippet.title}</li>
      ))}
    </div>
  );
}
