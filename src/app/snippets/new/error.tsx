'use client';

interface Props {
  error: Error;
}

export default function NewSnippetError({ error }: Props) {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">{error.message}</h1>
    </div>
  );
}
