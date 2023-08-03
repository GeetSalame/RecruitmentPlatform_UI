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

    const showSidebar = () => {
        document.getElementById("sidebar").style.display = 'flex';
    }

    const hideSidebar = () => {
        document.getElementById("sidebar").style.display = 'none';
    }

    return (
        <div id='navbar'>
            <h1 className="heading">RecruIt</h1>
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
            <div id='sidebarsec'>
                <img id='sidebarmenu' src="https://cdn-icons-png.flaticon.com/512/2791/2791903.png" alt="sidebar" onClick={() => { showSidebar() }} />
                <div id="sidebar">
                    <img id='sidebarcross' src="https://cdn-icons-png.flaticon.com/512/10337/10337030.png" alt="back" onClick={() => { hideSidebar() }} />
                    <div id="sideheadlinks">
                        <ul>
                            <li>Home</li>
                            <li>Explore</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div id="sidectabtns">
                        <button className="btn">Log In</button>
                        <button className="btn2">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;