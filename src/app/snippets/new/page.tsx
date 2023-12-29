export default function SnippetCreatePage() {
  return (
    <form action="">
      <h3 className="p-3 font-bold">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
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

        <div className="flex gap-4">
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
        <button
          type="submit"
          className="rounded bg-blue-200 p-2"
        >
          Save
        </button>
      </div>
    </form>
  );
}
