import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ProductImage from "../../images/amazonbanner.jpg";
import Amazonfoto from "../../images/amazonfoto.jpg";
import "./slideImage.css";


const fadeImages = [
  ProductImage,
  Amazonfoto,
  ProductImage
];

const SlideImage = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img className="image" src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img className="image" src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img className="image" src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}
export default SlideImage