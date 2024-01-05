'use client';

import { createSnippet } from '@/actions';
import { useFormState } from 'react-dom';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, { message: '' });

  return (
    <form action={action}>
      <h3 className="py-4 text-xl font-bold">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            className="w-12"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="w-full rounded border p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="w-12"
            htmlFor="code"
          >
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="w-full rounded border p-2"
          />
        </div>

        {formState.message && (
          <div className="rounded border border-red-500 bg-red-200 p-2 text-red-500">
            {formState.message}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="my-4 rounded border p-2"
      >
        Save
      </button>
    </form>
  );
}
