import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import '../styles/index.css'
import Middle from './middle';
import About from './about'
import Gallery from './gallery'
import { Link } from 'react-router-dom';

const Index = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor)

    // var [homeColor, setHomeColor] = useState(null);

    // useEffect(() => {
    //     setHomeColor(document.getElementById("idHome"))
    // }, [])
    const [galleryClicked, setGalleryClicked] = useState(false);
    const [aboutClicked, setaboutClicked] = useState(false);
    const [contactClicked, setcontactClicked] = useState(false);
    const [homeClicked, sethomeClicked] = useState(false);
    const scrollHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        // sethomeClicked(true);
        // setcontactClicked(false);
        // setaboutClicked(false);
    };

    const aboutSection = useRef(null);
    const scrollDownAbout = () => {
        var navbarOffset = 90;
        window.scrollTo({
            top: aboutSection.current.offsetTop - navbarOffset,
            behavior: "smooth",
        });
        // setaboutClicked(true);
        // setcontactClicked(false);
        // sethomeClicked(false);
    };

    const contactSection = useRef(null);
    var navbarOffset = 90;

    const scrollDownContact = () => {
        window.scrollTo({
            top: contactSection.current.offsetTop - navbarOffset,
            behavior: "smooth",
        });
        // setcontactClicked(true);
        // sethomeClicked(false);
        // setaboutClicked(false);
    };

    const gallerySection = useRef(null);

    const scrollDownGallery = () => {
        window.scrollTo({
            top: gallerySection.current.offsetTop - navbarOffset,
            behavior: "smooth"
        })
    }

    // const scrollEfect = () => {
    //     if (contactClicked === true) {
    //         if (window.scrollY > 20) {
    //             setaboutClicked(false);
    //             setcontactClicked(false);
    //             sethomeClicked(false);
    //         }
    //     }
    // }

    // window.addEventListener('scroll', scrollEfect)
    const [homeScrollHeight, setHomeScrollHeight] = useState(null);


    const homeHeightRef = useRef(null);
    const [homeToAboutHeight, setHomeToAboutHeight] = useState(null);
    const [aboutToContactHeight, setAboutToContactHeight] = useState(null);
    const [contactHeight, setContactHeight] = useState(null);
    const [gallerytoContactHeight, setgallerytoContactHeight] = useState(null)
    useEffect(() => {
        if (homeHeightRef.current) {
            const homeHeight = homeHeightRef.current.offsetHeight;
            setHomeToAboutHeight(homeHeight);
            let x = homeHeightRef.current.scrollHeight;
            setHomeScrollHeight(x);
        }
        if (aboutSection.current) {
            const aboutHeight = aboutSection.current.offsetHeight;
            setAboutToContactHeight(aboutHeight);
        }
        if (contactSection.current) {
            const contactHeightt = contactSection.current.offsetHeight;
            setContactHeight(contactHeightt);
        }
        if (gallerySection.current) {
            const galleryHeight = gallerySection.current.offsetHeight;
            setgallerytoContactHeight(galleryHeight)
        }
    }, []);
    console.log(homeScrollHeight, homeToAboutHeight)


    const scrollDeneme = () => {
        if (window.scrollY > homeToAboutHeight - 10) {
            setaboutClicked(true);
        } else {
            setaboutClicked(false);
        }
        if (window.scrollY > aboutToContactHeight + homeToAboutHeight / 2) {
            setaboutClicked(false)
        }
        if (window.scrollY > homeToAboutHeight / 2 + aboutToContactHeight) {
            setGalleryClicked(true)
        } else {
            setGalleryClicked(false);
        }
        if (window.scrollY > gallerytoContactHeight / 2 + 20) {
            setcontactClicked(true)
        } else {
            setcontactClicked(false)
        }
        if (window.scrollY < homeToAboutHeight - 10) {
            sethomeClicked(true);
        } else {
            sethomeClicked(false);
        }

    }
    window.addEventListener('scroll', scrollDeneme)




    return (
        < >
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
            </head>
            <div className='main' ref={homeHeightRef}>
                <div className='main-cover'>
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
                                    <nav><ul className='navbar-ul'><li><button className={color ? 'navbarBtn-home navbarBtn-home-color fadeInUp-animation' : 'navbarBtn-home fadeInUp-animation'} id='idHome' onClick={scrollHome}><span className={homeClicked ? 'idHome' : ''}>Anasayfa</span></button></li><li><button onClick={scrollDownAbout} style={{ textDecoration: "none" }} className={color ? 'navbarBtn-home navbarBtn-home-color fadeInUp-animation' : 'navbarBtn-home fadeInUp-animation'} ><span className={aboutClicked ? 'idAbout' : ''}>Hakkımızda</span></button></li>
                                        <li><button className={color ? 'navbarBtn-home navbarBtn-home-color fadeInUp-animation' : 'navbarBtn-home fadeInUp-animation'} onClick={scrollDownGallery}><span className={galleryClicked ? 'idGallery' : ''}>Galeri</span></button>
                                        </li>
                                        <li><button className={color ? 'navbarBtn-home navbarBtn-home-color fadeInUp-animation' : 'navbarBtn-home fadeInUp-animation'} id='idHome' onClick={scrollDownContact}><span className={contactClicked ? 'idContact' : ''}>İletişim</span></button></li>
                                    </ul></nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rich-first-header fadeInUp-animation'>
                        Hayallerine giden yolda ilk adımı atmaya ne dersin ?
                    </div>
                    <span className='alt-cizgi fadeInUp-animation'>______</span>
                    <div className='richHeader fadeInUp-animation'>
                        RICH FAME AGENCY - SOSYAL MEDYA AJANSI
                    </div>
                    <div className='whatsapp-basvur fadeInUp-animation'>
                        <a href='https://api.whatsapp.com/send/?phone=905056486325&text&type=phone_number&app_absent=0' target='blank'>
                            <button class="basvur-button">
                                WHATSAPP BAŞVURU
                            </button></a>
                    </div>
                    <div className='alt-taraf fadeInUp-animation' >
                        <ul className='listeler'>
                            <li className='liste'><h2>Biz Kimiz ?</h2> Sosyal medya ve yayıncılık platformlarında 7 yıldır aktif olarak richfameagency olarak hizmet vermekteyiz.</li>
                            <li className='liste'><h2>Yayıncılık</h2>Bugünlerde canlı yayın yapmak kullanım kolaylığı sayesinde gün geçtikçe daha popüler hale geliyor. YouTube Live, Facebook Live ve TikTok Live herkes tarafından biliniyor olabilir ancak, en popüler canlı yayın uygulaması aslında hangisi?</li>
                            <li className='liste'><h2>Ne Yapmalıyım ?</h2> Hemen iletişim formunu doldur veya bize whatsapp üzerinden ulaş ! Senin tarzına en uygun platformu seçelim ve kazanmaya hemen başla !</li>
                        </ul>
                    </div>
                </div>
            </div>
            <main className='pages-sub'>
                <section ref={aboutSection}>
                    <About /></section>
                <section ref={gallerySection}>
                    <Gallery />
                </section>
                <section ref={contactSection}>
                    <Middle /></section>

            </main>
        </>
    )
}

export default Index