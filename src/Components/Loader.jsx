import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Loader() {
    useEffect(() => {
        Aos.init({
          offset: 1,
        })
      }, [])
  return (
    <div className='coming-soon' data-aos="zoom-in" data-aos-duration="1400" data-aos-delay="2500">
    <p >Coming Soon</p>
      <div className="loader"></div>
    
    </div>
  )
}

export default Loader
