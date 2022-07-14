import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import { getCategories } from '../Services'

const Header = () => {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 rounded-b-lg bg-red-500 px-10">
      <div className="inline-block w-full border-b border-blue-500 py-8">
        <div className="block md:float-left">
          <Link href={'/'}>
            <span className="cursor-pointer text-4xl font-bold text-white">
              On Target Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white transition duration-300 hover:text-gray-500 md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
