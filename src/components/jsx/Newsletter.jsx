import React from 'react';
import '../styles/newsletter.css';

function Newsletter() {
  return (
    <div id='newsletter'>
        <h1 className="heading">Subscribe to our Newsletter</h1>
        <p>Stay up to date to get latest job updates</p>
        <div>
            <input className='inp' type="email" name="" id="" placeholder='Enter Email address...'/>
            <button className="btn2">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter;