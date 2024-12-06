import React from 'react'

export default function Buba() {
  return (
    <div className=''>
      <footer className="bg-black text-white py-4">
        <div className='container'>
          <div className="container mx-auto text-center">
            <p className="text-lg font-bold">
              🐢 Protect Our Oceans | Save the Sea Turtles
            </p>
            <p clasName="text-sm mt-2">
              © Turtle Conservation Initiative. All rights reserved.
            </p>
            <p ClassName="text-sm mt-1">
              Follow us on:
              <a href="https://facebook.com"
                target="_blank"
                className="text-blue-400 ml-1 hover:underline"
              >Facebook
              </a>
              <a href="https://instagram.com"
                target="_blank"
                className="text-blue-400 ml-1 hover:underline"
              >
                instagram
              </a>
              <a href="https://twiter.com"
                target="_blank"
                className="text-blue-300 ml-1 hover:underline"
              >
                Twitter
              </a>

            </p>
            {/* <hr /> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
