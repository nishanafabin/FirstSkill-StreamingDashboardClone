export interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date?: string;
  vote_average?: number;
  genre_ids?: number[];
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
}

export interface TMDBResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
}