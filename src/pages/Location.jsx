import React from 'react'
import { Link } from 'react-router-dom';

function Location() {
  return (
    <div className='flex items-center justify-center h-screen w-full'>

  
    <div className=" w-[35rem] py-20 flex flex-col justify-center items-center border-[3px] border-black rounded-xl">
    <h2 className="text-emerald-400 text-4xl font-semibold mb-12">
     Provide Your Address
    </h2>
    <form className=" max-w-lg">
       
        <label className='font-bold'>Your Location</label>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          required
          placeholder="Enter your Location"
        />
      </div>
        <label className='font-bold'>Doctor's Specialization(optional)</label>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter the Doctor Specialization"
        />
      </div>
      <Link to={'/underconstruction'}
        className="bg-emerald-500 text-center hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline block w-[20rem]"
        type="button"
      >
        Next
      </Link>
    </form>
  </div>
  </div>
  )
}

export default Location;