import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import TopHeader from "../components/TopHeader";


const ContactUs = () => {
	return(
		<>
			<div classNameNameName="main-content inner" id="home" >
	      		<TopHeader/>
	      	</div>

			<section className="ab-info-main py-md-5 py-5">
			    <div className="container">
			        <div className="inner-sec-w3pvt py-lg-5">
			            <h3 className="tittle text-center mb-lg-5 mb-3 inner-tittle"><span className="sub-tittle">Find Us</span> Contact Us</h3>
			            <p className="text-center px-lg-5" data-aos="fade-up"></p>
			            <div className="contact-form mt-md-5">
			                <div className="contact-form-inner mx-auto text-left">
			                    <form name="contactform " id="contactform" method="post" action="#">
			                        <div className="row">
			                            <div className="col-lg-6 con-gd">
			                                <div className="form-group">
			                                    <label>Name</label>
			                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
			                                </div>
			                                <div className="form-group">
			                                    <label>Email</label>
			                                    <input type="email" className="form-control" id="name" placeholder="Enter Email" name="email"/>
			                                </div>

			                            </div>
			                            <div className="col-lg-6 con-gd">

			                                <div className="form-group">
			                                    <label>Phone No.</label>
			                                    <input type="text" className="form-control" id="phone" placeholder="Enter Phone no." name="phone"/>
			                                </div>
			                                <div className="form-group">
			                                    <label>Subject</label>
			                                    <input type="text" className="form-control" id="name" placeholder="Subject" name="subject"/>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <label>How can we help?</label>
			                            <textarea name="issues" className="form-control" id="iq" placeholder="Enter Your Message Here"></textarea>
			                        </div>
			                        <button type="submit" className="btn btn-default">Submit</button>
			                    </form>
			                    <div className="map mt-md-5">

			                    </div>
			                </div>

			            </div>

			        </div>
			    </div>
			</section>

		</>
		);
}

export default ContactUs;