import React from 'react'
import '../style/home.css'
import imageHeroPhone from '../home/imageHerophone.png'
import illustrationPassionate from "../home/illustrationPassionate.svg"
import illustrationFriendly from "../home/illustrationFriendly.svg"
import illustrationResourceful from "../home/illustrationResourceful.svg"


const Home = () => {
    return (
        <div>
            <div className="top-section">
                <div className="text">
                <h1>Award-winning custom designs and digital branding solutions</h1> 
                <h3>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</h3>
                <button className="learn">Learn More</button>
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
                <button className="touch">GET IN TOUCH</button>
            </div>
        </div>
    )
}

export default Home
