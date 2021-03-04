import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ProductImage from "../../images/amazonbanner.jpg";
import Amazonfoto from "../../images/amazonfoto.jpg";
import "./slideImage.css";



const slideImages = [
ProductImage,
  Amazonfoto,
  ProductImage
];

const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default SlideShow