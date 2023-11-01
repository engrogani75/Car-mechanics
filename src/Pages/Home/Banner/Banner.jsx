import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Banner = () => {
    
    return (
       
      <Carousel showThumbs={false}>
      <div className='h-fit'>
        <img src="/assets/images/banner/1.jpg" alt="Image 1"/>
       <div className='lg:h-[880px] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 left-0 bottom-0'>
      <div className='relative top-80 ml-10'>
      <p className=" text-6xl text-white w-96  text-justify  font-bold">Affordable Price For Car Servicing</p>
      <p className="  text-white lg:w-[500px] text-justify  font-bold mt-4"> There are many variations of passages of  available,
       but the majority have suffered alteration in some form</p>
       <div className='flex gap-8 mt-10'>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Discover More</button>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Latest Projec</button>
       </div>
      </div>
       </div>
      </div>
      <div>
        <img src="/assets/images/banner/2.jpg" alt="Image 2" />
        <div className='lg:h-[880px] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 left-0 bottom-0'>
      <div className='relative top-80 ml-10'>
      <p className=" text-6xl text-white w-96  text-justify  font-bold">Affordable Price For Car Servicing</p>
      <p className="  text-white lg:w-[500px] text-justify  font-bold mt-4"> There are many variations of passages of  available,
       but the majority have suffered alteration in some form</p>
       <div className='flex gap-8 mt-10'>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Discover More</button>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Latest Projec</button>
       </div>
      </div>
       </div>
      </div>
      <div>
        <img src="/assets/images/banner/3.jpg" alt="Image 3" />
        <div className='lg:h-[880px] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 left-0 bottom-0'>
      <div className='relative top-80 ml-10'>
      <p className=" text-6xl text-white w-96  text-justify  font-bold">Affordable Price For Car Servicing</p>
      <p className="  text-white lg:w-[500px] text-justify  font-bold mt-4"> There are many variations of passages of  available,
       but the majority have suffered alteration in some form</p>
       <div className='flex gap-8 mt-10'>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Discover More</button>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Latest Projec</button>
       </div>
      </div>
       </div>
      </div>

      <div>
        <img src="/assets/images/banner/4.jpg" alt="Image 4" />
        <div className='lg:h-[880px] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 left-0 bottom-0'>
      <div className='relative top-80 ml-10'>
      <p className=" text-6xl text-white w-96  text-justify  font-bold">Affordable Price For Car Servicing</p>
      <p className="  text-white lg:w-[500px] text-justify  font-bold mt-4"> There are many variations of passages of  available,
       but the majority have suffered alteration in some form</p>
       <div className='flex gap-8 mt-10'>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Discover More</button>
        <button className='bg-[#FF3811] px-6 py-2 text-white border-2 hover:bg-transparent duration-75'>Latest Projec</button>
       </div>
      </div>
       </div>
      </div>
    </Carousel>

    

     
    );
};

export default Banner;