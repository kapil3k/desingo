import React from 'react';
import "../style/locations.css";

const Locations = () => {
    return (
        <div>
            <div className="locations">
                <div className="loc-can">
                    <div className="loc-text">
                        <div className="head-loc">Canada</div>
                        <div className="cont-info">
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
                        <div className="cont-info">
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
                        <div className="cont-info">
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
        </div>
    )
}

export default Locations
