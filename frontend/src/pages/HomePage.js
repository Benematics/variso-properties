import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import TopHeader from "../components/TopHeader";
import Process from "../components/Process";
import Method from "../components/Method";
import CountdownTimer from "../components/CountdownTimer";
import background from "../banner.jpg";


const HomePage = () => {

	const Styling = {
		 backgroundImage: `url(${background})`, 
		 backgroundSize: "cover",
	     webkitBackgroundSize: "cover",
	     mozBackgroundSize: "cover",
	     oBackgroundSize: "cover",
	     msBackgroundSize: "cover",
	     minHeight: "50em",
	     position: "relative"
	}

	return(
  <>
	<div classNameName="main-content" id="home" style={Styling}>
      <TopHeader/>
		<section className="banner">
            <div className="container">
                <div className="row banner-grids">
                    <div className="col-lg-6 banner-info-w3ls">
                        <h2>A Vision For Your Life
                        </h2>
                        <h3 className="mb-3">Invest in a property Now and grow your money</h3>
                        <p className="mb-4">Our plan is to create and connect people with properties and developments that generates consistent cash flow.</p>
                        <Link to="/About" className="btn" style={{backgroundColor: "#000", color:"#fff"}}>Read More</Link>
                    </div>
                    <div className="col-lg-6 banner-image">
                        <div className="img-effect">
                            <img src="images/ban2.jpg" alt="" className="img-fluid image1"/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
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
                    <h3 className="mb-md-5 tittle">Our Strategy</h3>

                    <p>Our investment strategy centers on the building, acquisition, rebranding, and operation of undervalued multifamily properties in order to create rental income for ourselves and investors. We research, create and/or uncover properties that are mismanaged, undermarketed, and/or minimally maintained, and then rebrand them through renovations, more efficient management, and timely marketing. </p>
                    <p className="mt-3">The result for our investors is an asset that quickly (and at times, dramatically) increases in value, while also producing a predictable monthly income, as well as favorable tax advantages.</p>
                </div>

            </div>
        </div>
    </section>


    <section className="about py-lg-5 py-md-5 py-5">
        <div className="container">
            <div className="inner-sec-w3pvt py-lg-5 py-3">
                <div className="fetured-info pt-lg-5">
                    <h3 className="tittle  text-center my-lg-5 my-3">What We Offer</h3>
                    <div className="row fetured-sec mt-lg-5 mt-3">

                        <div className="col-lg-6 serv_bottom feature-grids pl-lg-5">
                        	<div className="featured-left text-left">
							    <div className="bottom-gd px-3">
							        <span className="fa fa-money" aria-hidden="true" style={{backgroundColor: "#000", color:"#fff"}}></span>
							        <h3 className="my-4">Passive Income</h3>
							        <p>Varosi offers our investment partners the opportunity to leverage on our  multifamily rental properties plans that can create a passive monthly income, without the associated day to day management of such. 
							        Our experienced investment team thoroughly evaluates properties to find assets that have vast potential but are currently devalued due to disengaged management.
							        Once identified, we aggressively act on acquiring and improving the asset, with a proven property enhancement and management plan.</p>
							    </div>
							</div>
                        </div>

                        <div className="col-lg-6 p-0">
                            <div className="img-effect">
                                <img src="images/img1.jpg" alt="" className="img-fluid image1"/>
                            </div>

                        </div>

                    </div>
                </div>  

                <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5 process">Our Process</h3>
                	<span className="sub-tittle">Ours is a one of a kind process, where investor return is of the utmost concern.<br/> This is the reason we unwaveringly follow our process, as it’s battle-tested, and yields investors well-above-average returns.<br/> Our process is as follows:</span>
                		<Process/>
            </div>
        </div>
    
    </section>
   
    <CountdownTimer/>
    
   </>


		);
}

export default HomePage;