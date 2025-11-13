'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-4 py-3">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-red-600 text-2xl font-bold">
          StreamFlix
        </Link>
        
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-full border border-gray-600 focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/movies" className="hover:text-gray-300 transition-colors">
            Movies
          </Link>
          <Link href="" className="hover:text-gray-300 transition-colors">
            My List
          </Link>
          <button className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}