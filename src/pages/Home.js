import React from 'react'
import '../style/home.css'
import { Link } from 'react-router-dom'
import imageHeroPhone from '../home/imageHerophone.png'
import illustrationPassionate from "../home/illustrationPassionate.svg"
import illustrationFriendly from "../home/illustrationFriendly.svg"
import illustrationResourceful from "../home/illustrationResourceful.svg"
import logoLight from '../shared/desktop/logoLight.png'


const Home = () => {
    return (
        <div>
            <div className="top-section">
                <div className="text">
                <h1>Award-winning custom designs and digital branding solutions</h1> 
                <h3>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</h3>
                <button className="learn"><Link to="/locations">Learn More</Link></button>
                </div>
                <div className="mobile">
                    <div className="smartphone">
                        <img className="phone-img" src={imageHeroPhone} alt="" />
                    </div>
                </div>
            </div>
            <div className="cards-section">
                <div className="one-card">
                    <h2>WEB DESINGS</h2> 
                    <h4>VIEW PROJECTS</h4>
                </div>
                <div className="two-cards">
                    <div className="app-image">
                        <h2>APP DESINGS</h2> 
                        <h4>VIEW PROJECTS</h4></div>
                    <div className="graphic-design">
                        <h2>GRAPHIC DESINGS</h2> 
                        <h4>VIEW PROJECTS</h4>
                    </div>
                </div>
            </div>
            <div className="home-feature">
                <div className="feature1">
                    <img className="center-image" src={illustrationPassionate} alt="" />
                    <p className="head">PASSIONATE</p>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
                <div className="feature2">
                    <img className="center-image" src={illustrationResourceful} alt="" />
                    <p className="head">RESOURCEFUL</p>
                    <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
                <div className="feature3">
                    <img className="center-image" src={illustrationFriendly} alt="" />
                    <p className="head">FRIENDLY</p>
                    <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </div>
            <div className="talk-about">
                <div>
                    <p className="lets-talk">Let’s talk about your project</p>
                    <p className="ready">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <button className="touch"><Link to='/contact'>GET IN TOUCH</Link></button>
            </div>
            <div className="footer">
                <div className="foot-menu">
                    <div className="foot-logo"><img src={logoLight} alt="" /></div>
                    <div className="foot-tab">
                        <ul>
                            <li><Link to='/about'>Our Company</Link></li>
                            <li><Link to='/locations'>Locations</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="foot-cont">
                    <div className="foot-add">
                        Designo Central Office <br />
                        3886 Wellington Street <br />
                        Toronto, Ontario M9C 3J5
                    </div>
                    <div className="foot-phone-no">
                        Contact Us (Central Office) <br />
                        P : +1 253-863-8967 <br />
                        M : contact@designo.co <br />
                    </div>
                    <div className="foot-social-media">
                    <i class="fa fa-facebook-official" onClick={()=>window.location.href = 'https://facebook.com'}></i>
                    <i class="fa fa-youtube-play" onClick={()=>window.location.href = 'https://youtube.com'}></i>
                    <i class="fa fa-twitter" onClick={()=>window.location.href = 'https://twitter.com'}></i>
                    <i class="fa fa-pinterest" onClick={()=>window.location.href = 'https://pinterest.com'}></i>
                    <i class="fa fa-instagram" onClick={()=>window.location.href = 'https://instagram.com'}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
