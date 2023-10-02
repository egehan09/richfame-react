import React from 'react'
import Slider from '../components/slider'
import { SliderData } from '../components/sliderdata'
import '../styles/gallery.css'

const Gallery = () => {
    return (
        <>
            <div className='gallery-container'>
                <header className='header'>
                    <h1>İçeriklerimize Göz Atabilirsiniz</h1>
                </header>
                <div className="slider fadeInUp-animation"><Slider slides={SliderData} /></div>
                <div className='card-container fadeInUp-animation'>
                    {SliderData.map((slide, index) => {
                        return (
                            <video controls className='cards-video'>
                                <source src={slide.video}></source>
                            </video>

                        )
                    })}</div>
            </div>



        </>
    )
}

export default Gallery