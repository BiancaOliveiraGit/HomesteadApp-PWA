//header
import React from 'react'
import './header.css'
import Button from 'react-bootstrap/Button'


export default function Header(props) {

	return (
		<div className="header-title">
			<p>My Homestead </p>				
		<div>
		 <Button id="online-btn" variant={props.status? "success" : "warning"}>
		 {props.status ? 'Online' : 'Offline'}
		 </Button>
	 	</div>
		</div>
		)
}
