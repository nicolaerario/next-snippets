'use client';

import type { Snippet } from '@prisma/client';

interface Props {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
  return <div>Editing snippet with title: {snippet.title}</div>;
}
