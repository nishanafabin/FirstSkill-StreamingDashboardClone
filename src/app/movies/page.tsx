import MovieRow from '@/components/MovieRow'
import { fetchPopular, fetchNowPlaying, fetchTopRated } from '@/lib/tmdb'
import { TMDBResponse } from '@/types/movie'

export default async function MoviesPage() {
  const [popularData, nowPlayingData, topRatedData]: TMDBResponse[] = await Promise.all([
    fetchPopular(),
    fetchNowPlaying(),
    fetchTopRated(),
  ])

  return (
    <div className="pt-20 px-4">
      <h1 className="text-3xl font-bold mb-8">All Movies</h1>
      <div className="space-y-8">
        <MovieRow movies={popularData.results} categoryTitle="Popular Movies" />
        <MovieRow movies={nowPlayingData.results} categoryTitle="Now Playing" />
        <MovieRow movies={topRatedData.results} categoryTitle="Top Rated" />
      </div>
    </div>
  )
}