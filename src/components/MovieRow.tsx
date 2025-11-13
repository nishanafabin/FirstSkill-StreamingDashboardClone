'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Movie } from '@/types/movie'

interface MovieRowProps {
  movies: Movie[]
  categoryTitle: string
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <section className="px-4 mb-8">
      <h3 className="text-xl font-semibold mb-4">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="min-w-[200px] hover:scale-105 transition-transform cursor-pointer">
              <Image
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-md"
              />
              <p className="text-sm mt-2 line-clamp-2 h-10">{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}