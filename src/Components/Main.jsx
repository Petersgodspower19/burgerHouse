import React, { useEffect, useState } from 'react';
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.png";
import burger4 from "../assets/burger4.png";
import BurgerItem from './BurgerItem';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const imageArray = [burger1, burger2, burger3, burger4];

function Main() {
  const mainImage = useSelector((state) => state.work.mainImgSrc);
  const [currentImage, setCurrentImage] = useState(mainImage || imageArray[0]); //i want to initially set the currentImage to eiher the mainImage or the firstImage of the array
  const [isAnimating, setIsAnimating] = useState(false);  

  useEffect(() => {
    Aos.init({
      offset: 1,
    });
  }, []);

  //I want to handle image change with a transition
  useEffect(() => {
    if (mainImage) {
      setIsAnimating(true); 
          setCurrentImage(mainImage);  
        setIsAnimating(false); 
        Aos.refresh();
         
    }
  }, [mainImage]);

  return (
    <div className='main'>
      <div className='description'>
        <h3 data-aos="zoom-in-left" data-aos-duration="1400" data-aos-delay="200">
          The Ultimate <br /> <span>Burger Club</span>
        </h3>
        <p data-aos="fade-right" data-aos-duration="1400" data-aos-delay="300">
          Savor the Flavor, Join the Club!
        </p>
        <div className="burgers">
          {imageArray.map((item) => (
            <BurgerItem burger={item} key={item} />
          ))}
        </div>
      </div>
      <div className='main-img'>
        <img
          src={currentImage}
          alt=' '
          className={`transition-opacity ${isAnimating ? 'opacity-0' : 'opacity-100'}`} 
          data-aos="zoom-in"
          data-aos-duration="1400"
        />
      </div>
    </div>
  );
}

export default Main;
