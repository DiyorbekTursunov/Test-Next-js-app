# User Directory App

A simple Next.js application that displays and filters users from a public API.

## Features

- Displays a list of users from JSONPlaceholder API
- Allows filtering users by name in real-time
- State management with Zustand
- Data fetching with TanStack Query
- Styled with Tailwind CSS

## Tech Stack

- Next.js (App Router)
- TypeScript
- Zustand for state management
- TanStack Query for data fetching
- Tailwind CSS for styling

## Setup and Running

### Prerequisites

- Node.js 18+ installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-directory-app.git
cd user-directory-app
```

2. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/page.tsx`: Main page component with data fetching logic
- `components/UserList.tsx`: Component for displaying the filtered user list
- `store/useFilterStore.ts`: Zustand store for managing filter state
