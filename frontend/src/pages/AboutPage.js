import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import background from "../banner.jpg";
import TopHeader from "../components/TopHeader";
import Team from "../components/Team";
import CustomizedAccordions from "../components/CustomizedAccordions";

const AboutPage = () =>{
	const Styling = {
		 backgroundImage: `url(${background})`,
		 backgroundRepeat: "no-repeat", 
		 backgroundPosition: "bottom",
		 backgroundSize: "cover",
	     webkitBackgroundSize: "cover",
	     mozBackgroundSize: "cover",
	     oBackgroundSize: "cover",
	     msBackgroundSize: "cover",
	     minHeight: "16em",
	     position: "relative"
	}
	return(
		<>
			<div classNameName="main-content inner" id="home" style={Styling}>
	      		<TopHeader/>
	      	</div>
			<section className="hand-crafted py-5">
		        <div className="container py-lg-5">
		            <div className="row accord-info">
		                <div className="col-lg-6 banner-image">
		                    <div className="img-effect">
		                        <img src="images/img3.jpg" alt="" className="img-fluid image1"/>
		                    </div>

		                </div>
		                <div className="col-lg-6 pl-md-5 pt-6">
		                    <h3 className="mb-md-5 tittle">Who We Are</h3>
		                    <p>Varosi Properties came to life when a smart and hard working couple with extensive background in various businesses from Advertising and Marketing to Food and confectionery, printing and branding and yes – real estate, went all-in on a dream that had been building for quite a while. Varosi Properties was founded out of a love for creating outstanding and unique structural projects and discipline, a unique interest in real estate, and a desire to help others create passive income that would support and bless their families. Regis Ohia the CEO began working with accredited investors to help them improve their investment returns via the exceptional opportunities that the real estate market offers.</p>
		                    <p className="mt-3">Our plan is to create and connect people with properties and developments that generates consistent cash flow. By the end of 2025, we would have made 2,500 people wealthy through real estate.</p>
		                    <p className="mt-3">Invest in a property with Varosi Properties Now and watch your money grow consistently.</p>
		                    <p>Chat with us on whatsapp</p>
		                    <Link to="https://wa.me/+2348123456789" style={{textDecoration:"none"}}><i className="fa fa-whatsapp fa-3x" style={{color:"white"}}></i></Link>
		                </div>

		            </div>
		        </div>
		    </section>
	      	<Team/>
		   <div className="testimonials py-md-5 py-5">
	        <div className="container py-xl-5 py-lg-3">
	            <h3 className="tittle  text-center mb-lg-5 mb-3"><span className="sub-tittle">Questions</span>Frequently Asked Questions</h3>
	            <CustomizedAccordions/>
	            <h5 className="text-center whatsapp">You can invest in a property with Varosi Properties Now and watch your money grow consistently.<br/> Chat us on whatsapp</h5>
	            <div classNam="wa-link">
	            	<Link to="" style={{textDecoration:"none"}}><i className="fa fa-whatsapp fa-3x wa-link"></i></Link>
	            </div>
	        </div>
	   	  </div>


      	</>
		);
}

export default AboutPage;