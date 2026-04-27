# Personal Diary (Project 5)

A simple personal diary/journal web app built with **React + Vite**. Create daily entries with a title, date, image URL, and content. Entries are saved in your browser using **localStorage**.

## Features

- Create a new diary entry via a modal form
- Prevents duplicate entries for the same date
- Displays entries sorted by date (newest first)
- Click an entry card to view the full entry in a modal
- Data persists locally in the browser (`localStorage`)

## Tech Stack

- React
- Vite
- Tailwind CSS (via `@tailwindcss/vite`)
- DaisyUI (UI components/styles)
- lucide-react (icons)
- ESLint

## Getting Started

### Prerequisites
- Node.js (recommended: current LTS)

### Install
```bash
npm install
```

### Run in development
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Usage Notes

- **Entries are stored locally** in your browser under the key: `diaryDetails`.
- Clearing site data/localStorage will remove your saved diary entries.
- The “Image URL” field is optional (a default image URL is provided in the form).

## Project Structure (high level)

- `index.html` – app entry page
- `src/main.jsx` – React root render
- `src/App.jsx` – main app UI, localStorage persistence, list rendering
- `src/components/AddDiaryModal.jsx` – modal + form to create entries
- `src/components/DiaryCard.jsx` – entry card + modal detail view

## License

No license specified.
