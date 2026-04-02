import React from 'react'
import { services } from '../assets/assets'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity:0, x:-200 }}
      transition={{ duration:1 }}
      whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true }}
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Services'
    >

      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Services 
        <span className='underline underline-offset-4 decoration-1 font-light'> Provided</span>
      </h1>

      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        These are the 4 services that we provide to our clients.
      </p>

      <div className='flex flex-wrap justify-center gap-8'>

        {services.map((service,index)=>(  

          <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>  

            <img
              className='w-20 h-20 mx-auto mb-4 object-contain'
              src={service.image}
              alt={service.title}
            />  

            <h2 className='text-xl text-gray-700 font-medium'>  
              {service.title}  
            </h2>  

            <p className='text-gray-500 mb-4 text-sm'>  
              {service.description}  
            </p>  

            <Link to={`/service/${index}`}>  
              <button className="bg-blue-600 text-white px-8 py-2 rounded  
              hover:bg-blue-800 active:scale-95 transition-all duration-200">
                {service.button}
              </button>  
            </Link>  

          </div>

        ))}

      </div>

    </motion.div>
  )
}

export default Services