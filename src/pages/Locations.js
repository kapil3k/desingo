import React from 'react';
import { Link } from 'react-router-dom'
import "../style/locations.css";
import logoLight from '../shared/desktop/logoLight.png'


const Locations = () => {
    return (
        <div>
            <div className="locations">
                <div className="loc-can">
                    <div className="loc-text">
                        <div className="head-loc">Canada</div>
                        <div className="cont-info-loc">
                            <div className="addr">
                                <p className="bold-black">Designo Central Office</p>
                                <p className="black">3886 Wellington Street</p>
                                <p className="black">Toronto, Ontario M9C 3J5</p>
                            </div>
                            <div className="cont">
                                <p className="bold-black">Contact</p>
                                <p className="black">P : +1 253-863-8967</p>
                                <p className="black">M : contact@designo.co</p>
                            </div>
                        </div>
                    </div>
                    <div className="can-img"></div>
                </div>
                <div className="loc-aus">
                <div className="loc-text">
                        <div className="head-loc">Australia</div>
                        <div className="cont-info-loc">
                            <div className="addr">
                                <p className="bold-black">Designo AU Office</p>
                                <p className="black">19 Balonne Street</p>
                                <p className="black">New South Wales 2443</p>
                            </div>
                            <div className="cont">
                                <p className="bold-black">Contact</p>
                                <p className="black">P : (02) 6720 9092</p>
                                <p className="black">M : contact@designo.au</p>
                            </div>
                        </div>
                    </div>
                    <div className="aus-img"></div>
                </div>
                <div className="loc-uk">
                <div className="loc-text">
                        <div className="head-loc">United Kingdom</div>
                        <div className="cont-info-loc">
                            <div className="addr">
                                <p className="bold-black">Designo Office UK</p>
                                <p className="black">13  Colorado Way</p>
                                <p className="black">Rhyd-y-fro SA8 9GA</p>
                            </div>
                            <div className="cont">
                                <p className="bold-black">Contact</p>
                                <p className="black">P : 078 3115 1400</p>
                                <p className="black">M : contact@designo.uk</p>
                            </div>
                        </div>
                    </div>
                    <div className="uk-img"></div>
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

export default Locations
