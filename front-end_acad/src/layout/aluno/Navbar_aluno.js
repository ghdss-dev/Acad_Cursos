import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar_aluno.css"

export default function Navbar_aluno() {

	const [active, setActive] = useState("nav-menu-student"); 
	const [icon, setIcon] = useState("nav-toggler-student"); 

	const navToggle = () => {

		if(active === "nav-menu-student") {

			setActive("nav-menu-student nav-active-student");

		} else setActive("nav-menu-student"); 

		// Icon Toggler 

		if(icon === "nav-toggler-student") {

			setIcon("nav-toggler-student toggle-student");

		} else setIcon("nav-toggler-student");
	};

  return (

	<div>

		<nav className="nav-student"> 

			<a href="#" className="nav-student-brand">
				Aluno 
			</a> 

			<ul className={active}> 

				<li className="nav-item-student">
					<NavLink to="/addaluno" className="nav-link-student">
						Adicionar Aluno
					</NavLink>
				</li>

				<li className="nav-item-student">
					<NavLink to="/listaralunos" className="nav-link-student">
						Listar Alunos
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
