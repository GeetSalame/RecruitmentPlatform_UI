import React from 'react';
import '../styles/homepage.css';
import Herosec from './LandingSec/Herosec';
import Whyus from './LandingSec/Whyus';
import Feedback from './LandingSec/Feedback';
import Newsletter from './Newsletter';
import Partners from './LandingSec/Partners';

function Homepage() {
    return (
        <div id='homepage'>
            <Herosec />
            <Whyus />
            <Partners />
            <Feedback />
            <Newsletter />
        </div>
    )
}

export default Homepage;