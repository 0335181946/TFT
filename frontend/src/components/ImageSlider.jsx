import React from 'react'
import { useState } from 'react'

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: "center",
        backgroundSide: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }
    const leftArrow = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }
    const rightArrow = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    const goToPrev =() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

   

  return (
    <div style={sliderStyles}>

        <div style={leftArrow}  onClick={goToPrev} ><i class="fas fa-chevron-left"></i></div>
        <div style={rightArrow} onClick={goToNext}><i class="fas fa-chevron-right"></i></div>
        <div style={slideStyles}></div>
    </div>
  )
}

export default ImageSlider