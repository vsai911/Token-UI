import React, {Component} from 'react';
import Carousel from '../containers/carousel';

export default class LandingBody extends Component{
	constructor(props) {
	    super(props);
  	}

	render(){
	  	return(
	  		<div className="landing-body">
	  			<div className="logo">
					<img src="/public/img/companyLogo.png" c />
	  			</div>
	  			<div className="carousel">
	  				<Carousel/>
	  			</div>
	  			
	  		</div>
		)
	}
}