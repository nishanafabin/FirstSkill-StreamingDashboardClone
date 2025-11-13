const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

export async function fetchPopular() {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch popular movies');
  return res.json();
}

export async function fetchNowPlaying() {
  const res = await fetch(`${BASE}/movie/now_playing?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch now playing movies');
  return res.json();
}

export async function fetchTopRated() {
  const res = await fetch(`${BASE}/movie/top_rated?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch top rated movies');
  return res.json();
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch movie details');
  return res.json();
}

export async function searchMovies(query: string) {
  const res = await fetch(`${BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Failed to search movies');
  return res.json();
}