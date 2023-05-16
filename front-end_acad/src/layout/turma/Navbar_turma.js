import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar_turma.css"

export default function Navbar_turma() { 

	const [active, setActive] = useState("nav-menu-class"); 
	const [icon, setIcon] = useState("nav-toggler-class"); 

	const navToggle = () => {

		if(active === "nav-menu-class") {

			setActive("nav-menu-class nav-active-class");

		} else setActive("nav-menu-class"); 

		// Icon Toggler 

		if(icon === "nav-toggler-class") {

			setIcon("nav-toggler-class toggle-class");

		} else setIcon("nav-toggler-class");
	};

  return (

	<div>

		<nav className="nav-class"> 

			<a href="#" className="nav-class-brand">
				Turma 
			</a> 

			<ul className={active}> 

				<li className="nav-item-class">
					<NavLink to="/addturma" className="nav-link-class">
						Adicionar Turma
					</NavLink>
				</li>

				<li className="nav-item-class">
					<NavLink to="/listarturmas" className="nav-link-class">
						Listar Turmas
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
