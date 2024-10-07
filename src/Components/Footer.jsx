import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
        Aos.init({
          offset: 1,
        })
      }, [])
  return (

    <footer>
      <p data-aos="fade-right" data-aos-duration="1400" data-aos-delay="500">Code by Godspower</p>
    </footer>
  )
}

export default Footer
