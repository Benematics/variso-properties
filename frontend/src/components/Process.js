import React from 'react';
import data from '../data';

const Process = () => {
	return(
        <div className="feature-grids row mt-3 mb-lg-5 mb-3 text-center">
        	{
        		data.process.map((process)=>(
        			<div className="col-lg-4" data-aos="fade-up">
					    <div className="bottom-gd px-3">
					        <span className={process.icon} aria-hidden="true" style={{backgroundColor: "#000", color:"#fff"}}></span>
					        <h3 className="my-4">{process.title}</h3>
					        <p>{process.content}</p>
					    </div>
					</div>
 	      	))
        	}
        </div>
		);
}
export default Process;