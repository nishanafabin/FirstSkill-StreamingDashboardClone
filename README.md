# Streaming Dashboard

A Netflix-like streaming dashboard built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎬 Movie browsing with TMDB API integration
- 🎯 Hero banner with featured movie
- 📱 Responsive design
- 🔍 Movie detail pages
- ⚡ Server-side rendering with Next.js App Router

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd streaming-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get TMDB API Key**
   - Visit [TMDB API](https://www.themoviedb.org/settings/api)
   - Create an account and get your API key
   - Copy `.env.local` and add your key:
     ```
     TMDB_API_KEY=your_actual_api_key_here
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

This app is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your `TMDB_API_KEY` environment variable in Vercel dashboard
4. Deploy!

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** The Movie Database (TMDB)
- **Deployment:** Vercel