import React from 'react'
import '../style/about.css'

const About = () => {
    return (
        <div>
            <div className="about-section">
                <div className="about-text-section">
                    <div className="abo-heading">About Us</div>
                    <div className="info-about">
                        Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                    </div>
                </div>
                <div className="about-img"></div>
            </div>
            <div className="talent-section">
                <div className="talent-text">
                    <div className="talent-head">World-class talent</div>
                    <div className="talent-info">
                    We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. <br /><br />   
                    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                    </div>
                </div>
                <div className="talent-img"></div>
            </div>
        </div>
    )
}

export default About
