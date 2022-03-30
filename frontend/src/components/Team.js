import React from 'react';
import data from '../data';

const Team = () => {
	return(


		<section className="banner-bottom py-lg-5 py-4">
	        <div className="container">
	            <div className="inner-sec-w3pvt speak">
	                <h3 className="tittle  text-center my-lg-5 my-3"><span className="sub-tittle">Amazing People</span> Meet Our Team</h3>
	                	<p className="mt-3 text-center">We’re a growing team of Real Estate investment experts and thought leaders, full of personality minus the ego.<br/> We’re the wearer of many hats dedicated to helping people become financially independent through real estate.</p>
						    <div className="row mt-lg-5 mt-4">
								{data.team.map((team)=>(
								<div className="col-md-4 team-gd text-center">
					                <div className="team-img mb-4">
					                    <img src={team.image} className="img-fluid" alt={team.name}/>
					                </div>
					                <div className="team-info">
					                    <h3 className="mt-md-4 mt-3"><span className="sub-tittle-team">{team.title}</span>{team.name}</h3>
					                </div>
					            </div>
								))
							}
					        </div>
	            </div>
	        </div>
	    </section>

		);
}
export default Team;