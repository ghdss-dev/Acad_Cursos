import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar_lider.css"

export default function Navbar_lider() {

	const [active, setActive] = useState("nav-menu-leader"); 
	const [icon, setIcon] = useState("nav-toggler-leader"); 

	const navToggle = () => {

		if(active === "nav-menu-leader") {

			setActive("nav-menu-leader nav-active-leader");

		} else setActive("nav-menu-leader"); 

		// Icon Toggler 

		if(icon === "nav-toggler-leader") {

			setIcon("nav-toggler-leader toggle-leader");

		} else setIcon("nav-toggler-leader");
	};
	
  return (

	<div> 
		<nav className="nav-leader"> 

			<a href="#" className="nav-leader-brand">
				Lider 
			</a> 

			<ul className={active}>
				<li className="nav-item-leader">
					<NavLink to="/addlider"  className="nav-link-leader">
						Adicionar Lideres
					</NavLink>
				</li>

				<li className="nav-item-leader">
					<NavLink to="/listarlideres" className="nav-link-leader">
						Listar Lideres
					</NavLink>
				</li>

			</ul>

			<div onClick={navToggle} className={icon}>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>

		</nav>
		
	</div>

	
  )
}


