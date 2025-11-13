import Image from 'next/image'
import Link from 'next/link'
import { Movie } from '@/types/movie'

interface HeroBannerProps {
  movie: Movie
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <section className="relative h-[70vh] flex items-center">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-6 line-clamp-3">{movie.overview}</p>
          <div className="flex space-x-4">
            <Link
              href={`/movie/${movie.id}`}
              className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
            >
              ▶ Play
            </Link>
            <Link
              href={`/movie/${movie.id}`}
              className="bg-gray-600/70 px-8 py-3 rounded font-semibold hover:bg-gray-600 transition-colors"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}