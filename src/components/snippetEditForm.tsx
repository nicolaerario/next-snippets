'use client';

import { editSnippet } from '@/actions';
import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { useState, useTransition } from 'react';

interface Props {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = useState(snippet.code);
  const [isPending, startTransition] = useTransition();

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const handleEditSnippet = () => {
    startTransition(() => {
      editSnippet(snippet.id, code);
    });
  };

  return (
    <>
      <Editor
        className="my-4 rounded border border-black"
        height="40vh"
        theme="vs-dark"
        language="typescript"
        defaultValue={code}
        options={{ minimap: { enabled: false }, fontSize: 16 }}
        onChange={handleEditorChange}
      />

      <button
        className="rounded border p-2"
        onClick={handleEditSnippet}
        disabled={isPending}
      >
        Save
      </button>
    </>
  );
}
