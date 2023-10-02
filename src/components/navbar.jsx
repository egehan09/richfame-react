import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import '../styles/index.css'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/about';
import Home from '../pages/index'

const Navbar = (props) => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor)
    const handleClick = () => {
        props.onScroll();
    };

    return (
        <>

            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
            </head>
            <div className='main'>
                <div className='main-cover'>
                    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
                        <div className={color ? 'logo logo-color fadeInUp-animation' : 'logo fadeInUp-animation'}>
                            RICH FAME AGENCY
                        </div>
                        <div className='navbarBtn'>
                            <nav><ul className='navbar-ul' style={{ listStyle: "none", display: "flex", flexDirection: "row" }}><li><Link to="/" style={{ textDecoration: "none" }} className={color ? 'navbarBtn-home navbarBtn-home-color fadeInUp-animation' : 'navbarBtn-home fadeInUp-animation'}>Home</Link></li><li><Link to="/about" style={{ textDecoration: "none" }} className={color ? 'navbarBtn-home navbarBtn-home-color fadeInUp-animation' : 'navbarBtn-home fadeInUp-animation'} onClick={handleClick}>About</Link></li></ul></nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar