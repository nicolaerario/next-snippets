## Save and share your code snippets!

_A simple CRUD app with Nextjs + Prisma ORM + TailwindCSS_

## Getting Started

### First steps first:

- Clone this repository
- Run:

```bash
npm i
```

to install all dependencies.

### Database connection:

- Create an `.env` file based on `.env.example` and enter the db URL.
- Run:

```bash
npx prisma migrate dev
```

to create the tables in your database.

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.
