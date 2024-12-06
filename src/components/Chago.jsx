import React from 'react'
import Links from './customElements/Links'

export default function Chago() {
  // header
  return (
    <header className=" w-full p-10 flex justify-between bg-black">
      <div className='container flex justify-between items-center w-full'>

        <h1 className=' text-white text-2xl'>ზღვის კუები</h1>
        <Links />
      </div>
    </header>
  )
}
