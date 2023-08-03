import React, { useEffect } from 'react';
import whyusImg from '../../../img/whyus.png';

function Whyus() {
    let i = 1;
    let j = 1;
    let k = 1;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            setInterval(() => {
                if (i < 100) document.getElementById("clientNum").innerHTML = ++i + "%";
                if (j < 200) document.getElementById("candidatesNum").innerHTML = ++j + "K+";
                if (k < 300) document.getElementById("jobsNum").innerHTML = ++k + "+";
            }, 200);
        }

        if (window.scrollY < 10) {
            i = 1; j = 1; k = 1;
        }
    });

    return (
        <div id='whyusSec'>
            <div id='whyusNums'>
                <div className="numCards">
                    <span id='clientNum'>100</span>
                    <p>Client Satisfaction</p>
                </div>
                <div className="numCards">
                    <span id='candidatesNum'>200</span>
                    <p>Candidates Matched</p>
                </div>
                <div className="numCards">
                    <span id='jobsNum'>200</span>
                    <p>Jobs</p>
                </div>

            </div>
            <div id='whyusText'>
                <img src={whyusImg} alt="best team" />
                <div>
                    <h1 id='whyushead' className='heading'>Why Choose Us?</h1>
                    <ul id='whyusList'>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/4281/4281170.png" alt="" />
                            <p>Why us reason 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit magnam vero labore libero? Esse</p>
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/4281/4281170.png" alt="" />
                            <p>Why us reason 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit magnam vero labore libero? Esse</p>
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/4281/4281170.png" alt="" />
                            <p>Why us reason 3 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit magnam vero labore libero? Esse</p>
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/4281/4281170.png" alt="" />
                            <p>Why us reason 4 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit magnam vero labore libero? Esse</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Whyus;