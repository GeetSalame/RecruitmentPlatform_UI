import React, { useEffect, useRef } from 'react';
import '../../styles/homepage.css';
import Typed from 'typed.js';
import heroImg from '../../../img/hero-img.png'


function Herosec() {
    const typedText = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedText.current, {
            strings: ["Software Engineers", "Product Managers", "Data Scientists", "UI/UX Designer", "Marketing Manager"],
            startDelay: 500,
            typeSpeed: 30,
            backDelay: 2000,
            backSpeed: 30,
            fadeOutDelay: 500,
            smartBackspace: true,
            showCursor: false,
            loop: true,
        });
    }, [])

    return (
        <div id='herosec'>
            <div id="heroLeft">
                <h1><span style={{ color: "var(--theme-pri)" }}>RecruIt</span> the best</h1>
                <h1>among <span ref={typedText} style={{ color: "var(--theme-pri)" }}></span></h1>
                <p>where you find the perfect employee</p>
                <div id="hero-cta">
                    <button className='btn'>Hire Now</button>
                    <button className='btn2'>Find Job</button>
                </div>
            </div>
            <div id="heroRight">
                <img src={heroImg} alt="Recruit" />
            </div>
        </div>
    )
}

export default Herosec;