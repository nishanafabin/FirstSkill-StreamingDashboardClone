import HeroBanner from '@/components/HeroBanner'
import MovieRow from '@/components/MovieRow'
import { fetchPopular, fetchNowPlaying, fetchTopRated } from '@/lib/tmdb'
import { TMDBResponse } from '@/types/movie'

export default async function HomePage() {
  try {
    const [popularData, nowPlayingData, topRatedData]: TMDBResponse[] = await Promise.all([
      fetchPopular(),
      fetchNowPlaying(),
      fetchTopRated(),
    ])

    const heroMovie = popularData.results[0]

    return (
      <div className="pt-16">
        <HeroBanner movie={heroMovie} />
        <div className="space-y-8 py-8">
          <MovieRow movies={popularData.results} categoryTitle="Popular Movies" />
          <MovieRow movies={nowPlayingData.results} categoryTitle="Now Playing" />
          <MovieRow movies={topRatedData.results} categoryTitle="Top Rated" />
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to StreamFlix</h1>
          <p className="text-gray-600">Please configure TMDB_API_KEY environment variable</p>
        </div>
      </div>
    )
  }
}