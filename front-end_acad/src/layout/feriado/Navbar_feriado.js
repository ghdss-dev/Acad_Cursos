import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar_feriado.css"

export default function Navbar_feriado() {

	const [active, setActive] = useState("nav-menu-holiday"); 
	const [icon, setIcon] = useState("nav-toggler-holiday"); 

	const navToggle = () => {

		if(active === "nav-menu-holiday") {

			setActive("nav-menu-holiday nav-active-holiday");

		} else setActive("nav-menu-holiday"); 

		// Icon Toggler 

		if(icon === "nav-toggler-holiday") {

			setIcon("nav-toggler-holiday toggle-holiday");

		} else setIcon("nav-toggler-holiday");
	};

  return (

	<div>

		<nav className="nav-holiday"> 

			<a href="#" className="nav-holiday-brand">
				Feriado 
			</a> 

			<ul className={active}> 

				<li className="nav-item-holiday">
					<NavLink to="/addferiado" className="nav-link-holiday">
						Adicionar Feriado
					</NavLink>
				</li>

				<li className="nav-item-holiday">
					<NavLink to="/listarferiados" className="nav-link-holiday">
						Listar Feriado
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
