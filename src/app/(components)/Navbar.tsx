'use client'
import React from 'react'
import Link from 'next/link'

import { useState } from 'react';
import * as Tone from 'tone';
import { toast } from "react-hot-toast"

import axios from 'axios';

type Props = {}

function Navbar({}: Props) {
  const [phoneNumber, setPhoneNumber] = useState("+254797645137");


  async function sendAirtimeUI(formattedNumber = "+254797645137", airtimeAmount = 5) {
    try {
        const response = await axios.post('http://localhost:8080/api/send-ui-airtime', {
            phoneNumber: formattedNumber,
            airtimeAmount: airtimeAmount
        });

        if (response.status === 200) {
            console.log("Airtime successfully sent!");
            toast.success('Airtime successfully sent! 😊', {
              duration: 3000,
          });
        } else {
            console.error("Failed to send airtime, please try again.");
            toast.error('Error Sending Airtime 😥', {
              duration: 3000,
          });
        }
    } catch (error) {
        console.error('Error in sending airtime', error);
    }
  } 

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className='  bg-orange-500 text-white bg-navbar-bg flex flex-col md:flex-row justify-center items-center md:space-x-[240px] space-x-4 p-2'>
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
      <div className="tools-images flex flex-col md:flex-row justify-center md:space-x-12 mb-8 p-4 items-center">
        <div className="card mb-4 w-[200px] h-[200px] bg-card-yellow flex flex-col items-center justify-center p-2 rounded-lg rotate-0 md:rotate-6">
          <h3 className="text-xl font-semibold">Step 1</h3>
          <p className="text-sm text-gray-700 mt-2">Play the provided melody or create your own. 🎉</p>
        </div>

        

        <div className="card mb-4 w-[200px] h-[200px] bg-card-red flex flex-col items-center justify-center p-2 rounded-lg rotate-0 md:-rotate-3">
          <h3 className="text-xl font-semibold">Step 2</h3>
          <p className="text-sm text-gray-700 mt-2">Change up the tune of your melody.🎡</p>
        </div>

        <div className="card mb-4 w-[200px] h-[200px] bg-card-green flex flex-col items-center justify-center p-2 rounded-lg rotate-0 md:rotate-3">
          <h3 className="text-xl font-semibold">Step 3</h3>
          <p className="text-sm text-gray-700 mt-2">Send your loved one virtual hugs 🤗.</p>
        </div>
      </div>

      <div className="explainer-section text-center mb-4">
        <h2 className="text-xl font-semibold">Default Melody</h2>

        <div className="default-melody mb-4">
          <p className="centered-text mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia odio non orci scelerisque, eu posuere neque sodales. Fusce nec ante vitae libero facilisis elementum.
          </p>

          <div>
          <div className="flex justify-center items-center">
      <div className="w-[500px] h-[300px] bg-stone-300 rounded-lg flex justify-between items-center p-4">
        {/* Left Side: Textbox */}
        <textarea
          className="w-[200px] h-[250px] bg-white rounded-md p-2"
          defaultValue={`use_bpm 100  # Set the tempo

# Define chord progressions as variables
define :chord_progression do |chords|} 
chords.each do |chord| {play chord, sustain: 2 sleep 1 end end

# Define melody as a variable
define :melody do |notes| { use_synth :piano play_pattern_timed notes, [0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 1] end

# Adding the ambi_choir sample for smooth background
live_loop :choir do 
sample :ambi_choir, rate: 0.5, sustain: 2 sleep 4 end`}/>
        
        {/* Right Side: Play Button */}
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => console.log("Play Button Clicked")}
        >
          Play
        </button>
      </div>
    </div>

          </div>
        </div>

        <h2 className="text-xl font-semibold">Change the Tune</h2>

        <div className="transpose-melody mb-4">
          <p className="centered-text">
            Suspendisse potenti. Quisque ac feugiat orci, sit amet pretium nunc. Donec auctor metus at orci interdum fermentum. Morbi pretium erat et nisi tempus, ut vestibulum lorem lobortis.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Send some 💰 </h2>

        <div className="send-bundles mb-4">
          <p className="send-bundles">
            Nunc euismod nulla ut efficitur tempus. Fusce a dui eu neque maximus dapibus. Integer vitae viverra dui. Ut et eros in purus tempus tristique. Aliquam erat volutpat.
          </p>

          <input 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            className="border p-2 rounded-lg mt-2" 
            placeholder="Enter phone number" 
          />
          <button 
           onClick={() => sendAirtimeUI(phoneNumber, 5)} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 mt-2 hover:bg-blue-600 transition">
            Send Airtime
          </button>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-500 text-white text-center py-4">
        <p>Make Melodies❤️</p>
      </footer>
    </div>
  )
}

export default Navbar;
