//header
import React from 'react'
import './header.css'
//import Button from 'react-bootstrap/Button'
import PushNotifications from '../push-notification/push-notification';
import OnlineToggle from '../online-toggle/online-toggle';

export default function Header(props) {

	return (
		<div className="header-title">
			<p>My Homestead </p>				
			<div className="header-btn">
				<div> <OnlineToggle status={props.status}/></div>
				<div> <PushNotifications/></div>
			</div>
		</div>
		)
}


/* < div><Button id="online-btn" variant={props.status? "success" : "warning"}>
				{props.status ? 'Online' : 'Offline'}
				</Button>
				</div> */