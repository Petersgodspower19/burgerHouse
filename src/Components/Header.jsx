import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    Aos.init({
      offset: 1,
    })
  }, [])
  return (
    <header>
      <h2>Burgur</h2>
      <div className="socials" >
        <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="600"><i className="ri-facebook-line"></i></a>
        <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="700"><i className="ri-youtube-line"></i></a>
        <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="800"><i className="ri-twitter-x-line"></i></a>
      </div>
    </header>
  )
}

export default Header
