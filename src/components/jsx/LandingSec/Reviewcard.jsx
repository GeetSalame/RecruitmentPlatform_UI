import React from 'react';

function Reviewcard() {
    return (
        <div id='reviewcard'>
            <div id='reviewLeft'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profilePhoto" />
                <h1 className='heading'>Customer Name</h1>
                <p>subheading</p>
            </div>
            <div id='reviewRight'>
                <img src="https://cdn-icons-png.flaticon.com/512/9298/9298522.png" alt="" />
                <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, dignissimos impedit? Dolores iste itaque illo dignissimos incidunt beatae ipsam! Provident magnam reiciendis corrupti. Rerum sunt a officia nihil non explicabo!</p>
                <img src="https://cdn-icons-png.flaticon.com/512/9298/9298522.png" alt="" />
            </div>
        </div>
    )
}

export default Reviewcard;