import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Carousel extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const settings = {
	      dots: false,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      waitForAnimate: false,
	      autoplay:true
	    };

	    return(
	        <img className="carousel-image" src="/public/img/rayna1.jpg"/>
    	)
	}
}