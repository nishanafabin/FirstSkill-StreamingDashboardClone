import Image from 'next/image'
import Link from 'next/link'
import { fetchMovieById } from '@/lib/tmdb'
import { MovieDetail } from '@/types/movie'

interface MoviePageProps {
  params: { id: string }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie: MovieDetail = await fetchMovieById(params.id)

  return (
    <div className="pt-16 min-h-screen">
      <div className="relative h-[50vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      <div className="relative -mt-32 z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            {movie.tagline && (
              <p className="text-xl text-gray-300 italic mb-4">{movie.tagline}</p>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-600 px-2 py-1 rounded text-sm font-semibold">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
              <span className="text-gray-300">{movie.release_date}</span>
              {movie.runtime && (
                <span className="text-gray-300">{movie.runtime} min</span>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-semibold transition-colors">
                ▶ Watch Now
              </button>
              <Link
                href="/"
                className="bg-gray-600 hover:bg-gray-700 px-8 py-3 rounded font-semibold transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}