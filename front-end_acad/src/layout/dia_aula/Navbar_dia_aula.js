import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar_dia_aula.css"

export default function Navbar_dia_aula() {

	const [active, setActive] = useState("nav-menu-dayclass"); 
	const [icon, setIcon] = useState("nav-toggler-dayclass"); 

	const navToggle = () => {

		if(active === "nav-menu-dayclass") {

			setActive("nav-menu-dayclass nav-active-dayclass");

		} else setActive("nav-menu-dayclass"); 

		// Icon Toggler 

		if(icon === "nav-toggler-dayclass") {

			setIcon("nav-toggler-dayclass toggle-dayclass");

		} else setIcon("nav-toggler-dayclass");
	};

  return (

	<div>

		<nav className="nav-dayclass"> 

			<a href="#" className="nav-dayclass-brand">
				Dia aula 
			</a> 

			<ul className={active}> 

				<li className="nav-item-dayclass">
					<NavLink to="/adddiasaulas" className="nav-link-dayclass">
						Adicionar Dia Aula
					</NavLink>
				</li>

				<li className="nav-item-dayclass">
					<NavLink to="/listardiasaulas" className="nav-link-dayclass">
						Listar Dia Aula
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
