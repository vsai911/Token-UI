import React from 'react'
import { Link } from 'react-router';

import {Navbar} from 'React-Bootstrap';
import {Nav} from 'React-Bootstrap';
import {NavItem} from 'React-Bootstrap';
import {NavDropdown} from 'React-Bootstrap';
import {MenuItem} from 'React-Bootstrap';


export default (props)=>{
    return (
   <Navbar inverse>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <Link to="/">ZenKara</Link>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav >
	        <li role="presentation"><Link to="/about">Who We Are</Link></li>
	        <li role="presentation"><Link to="/contact" href="#">Get In Touch</Link></li>
	      </Nav>
	    </Navbar.Collapse>
  </Navbar>
);
}

