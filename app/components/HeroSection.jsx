import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center px-4'>
          <h1 className="text-[#5BC0BE] mb-4 text-4xl lg:text-6xl font-extrabold">
              Hello, I'm Bartek</h1>
          <p className='text-white text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris feugiat lacinia velit vel interdum. 
          Vestibulum porta nisi et massa porttitor, at aliquet felis semper. 
          </p>
          <div>
              <button className='px-6 py-3 rounded-full mr-4 bg-black hover:bg-slate-800 text-white ' >
              Download CV
              </button>
              <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-800 text-black ' >
              Contact
              </button>
          </div>
        </div>
        <div className='col-span-5 mt-4 lg:mt-0 '>
            <div className=' bg-[#1C2541] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative rounded-full '>
            <Image
            src='/images/Hero-Img.png'
            alt='Hero Image'
            className=' absolute transfor -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={300}
            height={400}
            />
          </div>
        </div>
        
    </div>
    </section>
  )
}

export default HeroSection