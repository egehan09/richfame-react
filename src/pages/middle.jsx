import React, { useState } from 'react'
import '../styles/middle.css'
import phones from '../images/phones.png'
import { SocialIcon } from 'react-social-icons';
import instaicon from '../images/instaicon.png'
import telegram from '../images/telegram.png'

const Middle = () => {
    const [move, setMove] = useState(false)
    const handleMove = () => {
        if (window.scrollY >= 90) {
            setMove(true)
        } else {
            setMove(false)
        }
    }
    window.addEventListener('scroll', handleMove)
    const [move2, setMove2] = useState(false)
    const handleMove2 = () => {
        if (window.scrollY >= 400) {
            setMove2(true)
        } else {
            setMove2(false)
        }
    }
    window.addEventListener('scroll', handleMove2)
    return (
        <>
            <div className='main2'>
                <div className={move ? 'footer-header fadeInUp-animation' : 'footer-header'}>BİZE INSTAGRAM'DAN DA ULAŞABİLİRSİNİZ</div>
                <div className={move2 ? 'insta-links fadeInUp-animation' : 'insta-links'}>
                    <div className='insta-href-div'><a className='insta-href' href='https://www.instagram.com/superlivetr_/' target='blank' style={{ cursor: 'pointer' }}><img src={instaicon} alt='not found' className='insta-href'></img></a></div>
                    <div className='insta-href-div'><a className='insta-href' href="https://www.instagram.com/richfameagencyy/" target='blank' style={{ cursor: 'pointer' }}><img src={instaicon} alt='not found' className='insta-href'></img></a></div></div>
                <img src={phones} alt='nt' className={move2 ? 'phones fadeInUp-animation' : 'phones'}></img>
                <a className='telegram-href' href='https://t.me/sezerdem41' target='blank'><img className={move2 ? 'telegram fadeInUp-animation' : 'telegram'} src={telegram} alt='not found'></img></a>
            </div>
            <div className='sub-x'>x</div>

        </>
    )
}

export default Middle