import React, { useEffect } from 'react';

function Whyus() {
    let i = 1;
    let j = 1;
    let k = 1;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            setInterval(() => {
                if (i < 100) document.getElementById("clientNum").innerHTML = ++i + "%";
                if (j < 200) document.getElementById("candidatesNum").innerHTML = ++j +"K+";
                if (k < 300) document.getElementById("jobsNum").innerHTML = ++k +"+";
            }, 50);
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
            <div></div>

        </div>
    )
}

export default Whyus;