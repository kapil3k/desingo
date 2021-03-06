import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'

const Nav = () => {
    const [mobile,setMobile] = useState(true)



    return (
        <div>
            <button onClick={()=> setMobile(!mobile)} className={ mobile ? "bars" : "bars bars-cross"}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
            </button>
            <div className={ mobile ? "nav-bar" : "nav-bar nav-margin"}>
                <Link to="/">
                <div className="logo">
                </div>
                </Link>
                <div className={ mobile ? "menu" : "menu menu-open"}>
                    <ul>
                        <li><Link to='/about' onClick={()=> setMobile(!mobile)}>Our Company</Link></li>
                        <li><Link to='/locations' onClick={()=> setMobile(!mobile)}>Locations</Link></li>
                        <li><Link to='/contact' onClick={()=> setMobile(!mobile)}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
