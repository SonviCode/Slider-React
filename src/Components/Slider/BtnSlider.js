import React from 'react';
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

const BtnSlider = ({direction, moveSlide}) => {
    return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>
            <img src={direction === "next"? rightArrow : leftArrow} alt="icone flèche" />
        </button>
    );
};

export default BtnSlider;