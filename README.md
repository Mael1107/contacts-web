# Contacts Web

Front-end for a simple contact manager, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**. It consumes a Rails API ([contacts-api](https://github.com/Mael1107/contacts-api)).

## Features

- List contacts (favorites first, then alphabetical)
- Create a contact on a dedicated page (`/contacts/new`)
- Edit a contact (`/contacts/[id]/edit`), reusing the same form
- Delete a contact
- Mark / unmark a contact as favorite
- Client-side validation with friendly error messages
- Mobile-first, responsive layout

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Axios
- lucide-react (icons)

## Architecture decisions

- **Server Components by default.** Pages fetch data on the server with `async/await`, so the list arrives already rendered: no `useEffect`, no loading state for the list, and less JavaScript sent to the browser.
- **Client Components only where there is interaction.** Only the pieces that need state or event handlers are client components: `ContactForm`, `DeleteButton` and `FavoriteButton`. The cards stay on the server.
- **Refreshing data without client state.** After a mutation, the app either navigates (`router.push("/")`) or re-renders the current page on the server (`router.refresh()`), so the list is always fetched fresh from the API.
- **Service layer.** All API calls live in `app/services/contacts.ts`; components never build URLs themselves.
- **One form, two pages.** `ContactForm` receives an optional `contact` prop: without it, it creates; with it, it starts pre-filled and updates.

## Project structure

```
app/
├── components/
│   ├── contact-card.tsx
│   ├── contact-form.tsx
│   ├── contact-list.tsx
│   ├── delete-button.tsx
│   └── favorite-button.tsx
├── contacts/
│   ├── new/page.tsx
│   └── [id]/edit/page.tsx
├── lib/api.ts          # Axios instance (baseURL from env)
├── services/contacts.ts
├── types/index.ts
├── layout.tsx
└── page.tsx
```

## Getting started

Requirements: Node 20+ and the [contacts-api](https://github.com/Mael1107/contacts-api) running on port 3001.

```bash
npm install
```

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Next steps

- Search by name / email
- Sorting options
- Toast notifications
- Per-field validation messages
- Deploy (Vercel)