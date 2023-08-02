import React from 'react';
import '../styles/homepage.css';
import Herosec from './LandingSec/Herosec';
import Whyus from './LandingSec/Whyus';

function Homepage() {
    return (
        <div id='homepage'>
            <Herosec />
            <Whyus />
        </div>
    )
}

export default Homepage;