    import React from 'react'
    import '../style/contact.css'
    import { Link } from 'react-router-dom'
    import illustrationAustralia from '../shared/desktop/illustrationAustralia.svg';
    import illustrationCanada from '../shared/desktop/illustrationCanada.svg';
    import illustrationUnitedKingdom from '../shared/desktop/illustrationUnitedKingdom.svg'
    import logoLight from '../shared/desktop/logoLight.png'


    const Contact = () => {
        return (
            <div>
                <div className="contact">
                    <div className="text-cont">
                        <h1>Contact Us</h1>
                        <h5>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</h5>
                    </div>
                    <div className="cont-info">
                        <div className="off-add">
                            <div className="off-add-head">Office Address</div>
                            <div>
                                Designo Central Office <br />
                                3886 Wellington Street <br />
                                Toronto, Ontario M9C 3J5 <br />
                            </div>
                        </div>
                        <div className="off-con">
                            <div className="off-con-head">Contact Info</div>
                                Contact Us (Central Office) <br />
                                P : +1 253-863-8967 <br />
                                M : contact@designo.co <br />
                        </div>
                    </div>
                </div>
                <div className="about-locations-marg">
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
                    <i class="fa fa-facebook-official"></i>
                    <i class="fa fa-youtube-play"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-pinterest"></i>
                    <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    export default Contact
