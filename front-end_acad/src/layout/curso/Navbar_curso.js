import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar_curso.css"

export default function Navbar_curso() {

	const [active, setActive] = useState("nav-menu-course"); 
	const [icon, setIcon] = useState("nav-toggler-course"); 

	const navToggle = () => {

		if(active === "nav-menu-course") {

			setActive("nav-menu-course nav-active-course");

		} else setActive("nav-menu-course"); 

		// Icon Toggler 

		if(icon === "nav-toggler-course") {

			setIcon("nav-toggler-course toggle-course");

		} else setIcon("nav-toggler-course");
	};

  return (

	<div>

		<nav className="nav-course"> 

			<a href="#" className="nav-course-brand">
				Curso 
			</a> 

			<ul className={active}> 

				<li className="nav-item-course">
					<NavLink to="/addcurso" className="nav-link-course">
						Adicionar Cursos
					</NavLink>
				</li>

				<li className="nav-item-course">
					<NavLink to="/listarcursos" className="nav-link-course">
						Listar Cursos
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
