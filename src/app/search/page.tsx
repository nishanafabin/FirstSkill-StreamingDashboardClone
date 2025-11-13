import { searchMovies } from '@/lib/tmdb'
import { TMDBResponse } from '@/types/movie'
import Link from 'next/link'
import Image from 'next/image'

interface SearchPageProps {
  searchParams: { q?: string }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ''
  
  if (!query) {
    return (
      <div className="pt-20 px-4 bg-black min-h-screen">
        <h1 className="text-2xl font-bold text-white">Search Movies</h1>
        <p className="text-gray-400 mt-2">Enter a search term to find movies</p>
      </div>
    )
  }

  const data: TMDBResponse = await searchMovies(query)

  return (
    <div className="pt-20 px-4 bg-black min-h-screen">
      
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data.results.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="hover:scale-105 transition-transform cursor-pointer">
              <Image
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-md shadow-lg"
              />
              <p className="text-sm mt-2 text-white font-medium">{movie.title}</p>
              <p className="text-xs text-gray-400">{movie.release_date?.split('-')[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}