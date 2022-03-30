import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const TopHeader = () => {
	return(
		<>
        <header className="header">
            <div className="container">
                <nav className="pb-3">
                    <div id="logo">
                        <Link className="navbar-brand" to="/"><img src="images/header-logo.png"/></Link>  
                    </div>

                    <label for="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-2">
                        <li className="active"><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
                        <li><Link to="/About" style={{textDecoration:"none"}}>About</Link></li>
                        <li><Link to="/Contact" style={{textDecoration:"none"}}>Contact</Link>
                        </li>
                        <li className="header-right">
                            <Link to="/Contact" className="contact" style={{textDecoration:"none"}}> <span className="fa fa-user"></span> Get Started</Link>
                        </li>
                    </ul>


                </nav>
            </div>
        </header>
        </>
		);
}
export default TopHeader;