import React, { useEffect, useState } from 'react';
import $ from 'jquery';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Reviewcard from './Reviewcard';

function Feedback() {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay],
        // Optional parameters
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // stopping autoplay on hover
    $('.swiper-wrapper').on('mouseenter', function () { swiper.autoplay.stop() })
    $('.swiper-wrapper').on('mouseleave', function () { swiper.autoplay.start() })

    const [temp, setTemp] = useState(1);
    useEffect(() => {
        setTemp(Math.random);   //just to render the page
    }, [])

    return (
        <div id='feedback'>
            <div>
                <h1 className="heading" style={{ fontStyle: "italic", textAlign: "left" }}>What our <br /> Customers Say</h1>
            </div>
            <div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {/* Slides */}
                        <div className="swiper-slide"><Reviewcard /></div>
                        <div className="swiper-slide"><Reviewcard /></div>
                        <div className="swiper-slide"><Reviewcard /></div>
                        <div className="swiper-slide"><Reviewcard /></div>
                        <div className="swiper-slide"><Reviewcard /></div>
                    </div>
                    {/* pagination dots */}
                    <div className="swiper-pagination"></div>

                    {/* navigation buttons */}
                    {/* <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Feedback;