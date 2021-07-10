import React from 'react'
import { Link } from 'react-router-dom'
import '../style/about.css'
import illustrationAustralia from '../shared/desktop/illustrationAustralia.svg';
import illustrationCanada from '../shared/desktop/illustrationCanada.svg';
import illustrationUnitedKingdom from '../shared/desktop/illustrationUnitedKingdom.svg'

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
            <div className="locations">
                <div className="canada">
                    <img className="lacation-img" src={illustrationCanada} alt="" /> <br />
                    <div className="loc-head">Canada</div>
                    <button className="see-loc"><Link to="/locations">SEE LOCATIONS</Link></button>
                </div>
                <div className="australia">
                    <img className="lacation-img" src={illustrationAustralia} alt="" /> <br />
                    <div className="loc-head">Australia</div>
                    <button className="see-loc"><Link to="/locations">SEE LOCATIONS</Link></button>
                </div>
                <div className="united-kingdom">
                    <img className="lacation-img" src={illustrationUnitedKingdom} alt="" /><br />
                    <div className="loc-head">United Kingdom</div>
                    <button className="see-loc"><Link to="/locations">SEE LOCATIONS</Link></button>
                </div>
            </div>
            <div className="real-deal-section">
                <div className="real-text">
                    <div className="real-head">
                        The real deal
                    </div>
                    <div className="real-info">
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. <br /><br />
                        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                    </div>
                </div>
                <div className="real-img"></div>
            </div>
        </div>
    )
}

export default About
