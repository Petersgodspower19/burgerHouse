import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { updateMainImage } from '../workSlice';


function BurgerItem({ burger }) {
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({
      offset: 1,
    });
  }, []);

  const handleImageClick = () => {
    dispatch(updateMainImage(burger)); 
  };

  return (
    <div>
      <img
        src={burger}
        alt=''
        className='scroll'
        data-aos="zoom-out-down"
        data-aos-duration="1400"
        data-aos-delay="550"
        onClick={handleImageClick} 
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
}

export default BurgerItem;
