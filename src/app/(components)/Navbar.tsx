'use client'
import React from 'react'
import Link from 'next/link'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className='bg-navbar-bg flex flex-col md:flex-row justify-center items-center md:space-x-[240px] space-x-4 p-2'>
        <div className='logo-section relative right-2 m-2 md:m-0'>
          <Link href='/'>
            <div className='logo-section flex justify-center items-center space-x-6'>
              <h2 className='text-2xl'>Music-Make</h2>
            </div>
          </Link>
        </div>

        <div className='font-light text-lg text-section flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-2 md:space-y-0 p-2'>
          <a href='#about' className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>About</a>
          <a href='#how-to-use' className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>How to Use</a>
          <a href='#buy-me-a-coffee' className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>Send A Virtual Hug</a>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="text-center p-6">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-4 text-gray-600">This platform is designed by musicians to help users engage with music and spread virtual kindness.</p>
      </section>

      {/* Cards Section */}
      <div className="tools-images flex flex-col md:flex-row justify-center md:space-x-8 mb-8 p-4 items-center">
        <div className="card mb-4 w-[200px] h-[200px] bg-card-yellow flex flex-col items-center justify-center p-2 rounded-lg rotate-0 md:rotate-6">
          <h3 className="text-xl font-semibold">Step 1</h3>
          <p className="text-sm text-gray-700 mt-2">This is some placeholder text for Card 1.</p>
        </div>

        <div className="card mb-4 w-[200px] h-[200px] bg-card-red flex flex-col items-center justify-center p-2 rounded-lg rotate-0 md:-rotate-3">
          <h3 className="text-xl font-semibold">Step 2</h3>
          <p className="text-sm text-gray-700 mt-2">This is some placeholder text for Card 2.</p>
        </div>

        <div className="card mb-4 w-[200px] h-[200px] bg-card-green flex flex-col items-center justify-center p-2 rounded-lg rotate-0 md:rotate-3">
          <h3 className="text-xl font-semibold">Step 3</h3>
          <p className="text-sm text-gray-700 mt-2">This is some placeholder text for Card 3.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>Africa is Talking ❤️</p>
      </footer>
    </div>
  )
}

export default Navbar;
