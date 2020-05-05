//nav-footer
import React from 'react';
//import React, { useState, useEffect } from 'react';
import './nav-footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendarAlt, faPiggyBank, faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navfooter() {
    return (
		<nav id="nav-footer" className="fixed-bottom" >							
            <FontAwesomeIcon className ='footer-menu-search' icon={faSearch} size='2x' id="iconFooter" />     
            <FontAwesomeIcon className ='footer-menu-calendar' icon={faCalendarAlt} size='2x' id="iconFooter"/>         
            <FontAwesomeIcon className ='footer-menu-bank' icon={faPiggyBank} size='2x' id="iconFooter"/>     
            <FontAwesomeIcon className ='footer-menu-user' icon={faUser} size='2x' id="iconFooter"/>              
		</nav>
		)
}
//onClick={search} 