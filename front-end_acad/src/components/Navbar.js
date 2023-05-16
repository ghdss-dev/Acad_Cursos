import React from "react"; 
import './Navbar.css';
import {GiAbstract109, GiFox, GiHolyOak, GiMaterialsScience, GiPerson, GiSchoolBag, GiSeaStar, GiTeacher} from "react-icons/gi"; 
import { NavLink } from "react-router-dom";
import logo from '../img/acad.jpeg';

function Navbar() {

	return(

		<div className="navbar-container">
			<a className="navbar-logo"> 
				<img className="logo" src={logo}></img>
				<span>Acad</span>Web
			</a>
			<ul className="nav-menu">

				<li className="nav-item">
				<NavLink to="/descricao" 
                        className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
                    >
						<GiFox className="nav-icon" />
						<div className="link-text">Descrição</div>
					</NavLink>
				</li>
				
				<li className="nav-item">
					<NavLink to="/aluno" 
						className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
					>
						<GiPerson className="nav-icon" />
						<div className="link-text">Alunos</div>
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/curso" 
						className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
					>
						<GiMaterialsScience className="nav-icon" />
						<div className="link-text">Cursos</div>
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/dia_aula"  
						className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
					>
						<GiAbstract109 className="nav-icon" />
						<div className="link-text">Dia Aula</div>
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/feriado" 
						className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}>
						<GiHolyOak className="nav-icon" />
						<div className="link-text">Feriado</div>
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/lider" 
						className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}>
						<GiSeaStar className="nav-icon" />
						<div className="link-text">Lideres</div>
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/professor" 
						className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}>
						<GiTeacher className="nav-icon" />
						<div className="link-text">Professores</div>
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/turma"  
						className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}>
						<GiSchoolBag className="nav-icon" />
						<div className="link-text">Turmas</div>
					</NavLink>
				</li>

			</ul>
		</div>
	);
}

export default Navbar;