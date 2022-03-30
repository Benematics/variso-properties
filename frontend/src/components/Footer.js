import React from 'react';
import {Link, Outlet} from 'react-router-dom';


const Footer = () => {
	return(
<>
	<footer>
        <div className="footer_1its py-5">
            <div className="container py-md-4">

                <div className="row footer-top mb-md-5 mb-4">
                    <div className="col-lg-4 col-md-6 footer-grid_section_1its" data-aos="fade-right">
                        <div className="footer-title-w3pvt">
                            <h3>Address</h3>
                        </div>
                        <div className="footer-text">
                            <p>Address : KM 34 Lekki - Epe Expy,<br/> Emperor Estate 106104, Sangotedo</p>
                            <p>Phone : +234 802 544 9507</p>
                            <p>Email : <Link to="mailto:info@example.com">info@varosiproperties.com</Link></p>
                            <p>Fax : +234 802 544 9507</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4 footer-grid_section_1its">
                        <div className="footer-title-w3pvt">
                            <h3>Quick Links</h3>
                        </div>
                        <div className="row">
                            <ul className="col-6 links">
                                <li><Link to="/About" style={{textDecoration:"none"}}>Why Choose Us </Link></li>
                                <li><Link to="/About" style={{textDecoration:"none"}}>Overview </Link></li>
                                <li><Link to="/" style={{textDecoration:"none"}}>Gallery</Link></li>
                                <li><Link to="/Contact" style={{textDecoration:"none"}}>Contact </Link></li>
                            </ul>
                            <ul className="col-6 links">
                                <li><Link to="#" style={{textDecoration:"none"}}>Privacy Policy </Link></li>
                                <li><Link to="#" style={{textDecoration:"none"}}>General Terms </Link></li>
                                <li><Link to="/About" style={{textDecoration:"none"}}>Faq's </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-lg-0 mt-4 col-sm-12 footer-grid_section_1its" data-aos="fade-left">
                        <div className="footer-title-w3pvt">
                            <h3>Newsletter</h3>
                        </div>
                        <div className="footer-text">
                            <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
                            <form action="#" method="post">
                                <input type="email" name="Email" placeholder="Enter your email..." required=""/>
                                <button className="btn1"><span className="fa fa-paper-plane-o" aria-hidden="true"></span></button>
                                <div className="clearfix"> </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-grid_section my-lg-5 text-center">
                    <div className="footer-title-w3pvt mb-4">
                        <h3>Countdown to our Properties Release</h3>
                    </div>

                </div>
                <div className="footer-grid_section text-center">
                    <div className="footer-title-w3pvt mb-4">
                        <h3>Get Access To Us</h3>
                    </div>
                    <ul className="social_section_1info">
                        <li className="mb-2 facebook"><Link to="#" style={{textDecoration:"none",backgroundColor: "#000", color:"#fff"}}><span className="fa fa-facebook mr-1"></span>facebook</Link></li>
                        <li className="mb-2 twitter"><Link to="#" style={{textDecoration:"none",backgroundColor: "#000", color:"#fff"}}><span className="fa fa-twitter mr-1"></span>twitter</Link></li>
                        <li className="google"><Link to="#" style={{textDecoration:"none",backgroundColor: "#000", color:"#fff"}}><span className="fa fa-instagram mr-1"></span>Instagram</Link></li>
                        <li className="linkedin"><Link to="#" style={{textDecoration:"none",backgroundColor: "#000", color:"#fff"}}><span className="fa fa-whatsapp mr-1"></span>Whatsapp</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>

    <div className="cpy-right text-center py-3">
        <p className="copy-w3layouts">© 2022 Varosi Properties. All rights reserved | Design by
            <Link to="http://w3layouts.com">JBUIT</Link>
        </p>
        <div className="move-top"><Link to="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></Link></div>
    </div>	
</>
			);
}

export default Footer;