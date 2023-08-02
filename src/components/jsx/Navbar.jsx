import React from 'react';
import '../styles/navbar.css';

function Navbar() {

    window.addEventListener('scroll', (e) => {
        const nav = document.querySelector('#navbar');
        if (window.scrollY > 0) {
            nav.classList.add("add-shadow");
        } else {
            nav.classList.remove("add-shadow");
        }
    });

    return (
        <div id='navbar'>
            <h1 className="heading">Recruit</h1>
            <div id="headlinks">
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>About</li>
                </ul>
            </div>
            <div id="ctabtns">
                <button className="btn">Log In</button>
                <button className="btn2">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;