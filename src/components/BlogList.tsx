'use client'
import locations from '@/constant/location'
import Link from 'next/link'

import {useState} from 'react'

const BlogList = () => {
  // Simulasi daftar blog
  // State untuk pagination
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2 // Menampilkan 2 item per geseran

  // Data yang ditampilkan
  const visibleBlogs = locations.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  // Fungsi untuk menggeser ke depan
  const handleNext = () => {
    if (currentIndex + itemsPerPage < locations.length) {
      setCurrentIndex((prev) => prev + itemsPerPage)
    }
  }

  // Fungsi untuk menggeser ke belakang
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - itemsPerPage)
    }
  }

  return (
    <div className="z-0 flex flex-col items-center space-y-4 m-6">
      <div className="flex space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-lg ${currentIndex === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-700'} transition`}
        >
          Sebelumnya
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= locations.length}
          className={`px-4 py-2 rounded-lg ${
            currentIndex + itemsPerPage >= locations.length
              ? 'bg-gray-300'
              : 'bg-blue-500 text-white hover:bg-blue-700'
          } transition`}
        >
          Selanjutnya
        </button>
      </div>
      <div className="flex space-x-4 gap-6">
        {visibleBlogs.map((blog) => (
          <Link
            key={blog.name}
            href={`/blog/${blog.href}`}
            className="w-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-10"
          >
            <div className="p-4">
              {/* Gambar Blog */}
              <div className="mb-4">
                <img
                  src="/hero_img.png"
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Nama Blog */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Bengkel Las {blog.name}
              </h3>
              {/* Deskripsi atau Ringkasan */}
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              {/* Tombol Aksi */}
              <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                Baca Selengkapnya
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogList
