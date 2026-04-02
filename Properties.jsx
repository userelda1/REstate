import React from 'react'
import { properties } from '../assets/assets'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

const Properties = () => {
  return (
    <motion.div
      initial={{opacity:0, x:200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
       viewport={{once:true}}
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Properties'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Properties <span className='underline underline-offset-4 decoration-1 font-light'>Available</span>
      </h1>

      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Discover homes available for you
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center'>
        {properties.map((property, index) => (
          <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center h-full'>

            <img
              className='w-full h-48 object-cover rounded mb-4'
              src={property.image}
              alt="property"
            />

            <h2 className='text-xl font-semibold mb-2'>{property.price}</h2>
            <p className='text-gray-500'>{property.location}</p>

            <div className='mt-4 text-sm text-gray-600'>
              <p>{property.bedroom}</p>
              <p>{property.bathroom}</p>
              <p>{property.size}</p>
            </div>
         <Link to={`/properties/${index}`}>
  <button className="bg-blue-600 text-white mt-2 px-8 py-2 rounded
   hover:bg-blue-800 active:scale-95 transition-all duration-200">
    View Details
  </button>
</Link>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Properties