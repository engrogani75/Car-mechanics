import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Banner = () => {
    
    return (
       
      <Carousel showThumbs={false}>
      <div>
        <img src="/assets/images/banner/1.jpg" alt="Image 1" />
       <div>
       <p className="relative -top-96 text-6xl text-white">Affordable Price For Car Servicing</p>
       </div>
      </div>
      <div>
        <img src="/assets/images/banner/2.jpg" alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="/assets/images/banner/3.jpg" alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>

    

     
    );
};

export default Banner;