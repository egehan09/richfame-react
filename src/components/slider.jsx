import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { SliderData } from './sliderdata'
import '../styles/slider.css'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrent(current === length - 1 ? 0 : current + 1)
    //     }, 10000)
    //     return () => clearInterval(timer);
    // })



    return (
        <section className='slider'>
            {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
            <AiOutlineLeft className='left-arrow' onClick={prevSlide} />
            <AiOutlineRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            // <img src={slide.image} alt='travelimage' className='image' />
                            <video controls preload='metadata' autoPlay='autoplay' className='image' loop='loop'>
                                <source src={slide.video} type='video/mp4' ></source>
                            </video>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Slider