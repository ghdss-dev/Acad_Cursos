import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar_professor.css"

export default function Navbar_professor() {

	const [active, setActive] = useState("nav-menu-teacher"); 
	const [icon, setIcon] = useState("nav-toggler-teacher"); 

	const navToggle = () => {

		if(active === "nav-menu-teacher") {

			setActive("nav-menu-teacher nav-active-teacher");

		} else setActive("nav-menu-teacher"); 

		// Icon Toggler 

		if(icon === "nav-toggler-teacher") {

			setIcon("nav-toggler-teacher toggle-teacher");

		} else setIcon("nav-toggler-teacher");
	};

  return (

	<div>

		<nav className="nav-teacher"> 

			<a href="#" className="nav-teacher-brand">
				Professor 
			</a> 

			<ul className={active}> 

				<li className="nav-item-student">
					<NavLink to="/addprofessor" className="nav-link-teacher">
						Adicionar Professor
					</NavLink>
				</li>

				<li className="nav-item-student">
					<NavLink to="/listarprofessores" className="nav-link-teacher">
						Listar Professores
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
