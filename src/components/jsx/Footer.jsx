import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <div id='footer'>
            <div id='footerUp'>
                <div id='footerULeft'>
                    <h1 className="heading">RecruIt</h1>
                    <ul id='footerLinks'>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="twitter" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="linkedin" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="fb" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/4494/4494468.png" alt="insta" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/4494/4494467.png" alt="youtube" /></li>
                    </ul>
                </div>
                <div id='footerURight'>
                    <div id="forCandidates">
                        <h3 className='heading'>For Candidates</h3>
                        <ul className='list'>
                            <li>Overview</li>
                            <li>Startup Jobs</li>
                            <li>Web3 Jobs</li>
                            <li>Featured</li>
                            <li>Tech Startups</li>
                            <li>Remote</li>
                        </ul>
                    </div>
                    <div id="forRecruiters">
                        <h3 className='heading'>For Recruiters</h3>
                        <ul className='list'>
                            <li>Overview</li>
                            <li>Recruit Pro</li>
                            <li>Curated</li>
                            <li>Recruit Cloud</li>
                            <li>Hire Developers</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div id="Company">
                        <h3 className='heading'>Company</h3>
                        <ul className='list'>
                            <li>About</li>
                            <li>Help</li>
                            <li>Blog</li>
                            <li>Terms & Risks</li>
                            <li>Privacy & Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id='footerBottom' style={{ textAlign: "center",marginTop:"50px", color:"silver" }}>
                <p>Copyright © 2023 Recruit. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;