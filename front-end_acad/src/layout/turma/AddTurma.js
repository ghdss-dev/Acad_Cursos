import React, {useState} from 'react';
import Navbar_turma from './Navbar_turma';
import './AddTurma.css';
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

export default function AddTurma() {

	let navigate = useNavigate(); 

	const [turma, setTurma] = useState({

		nome:"",
		valor: Number
	});

	const {nome, valor} = turma; 

	const OnInputChange = (e) => {

		setTurma({...turma, [e.target.name]: e.target.value }); 

	}; 

	const onSubmit = async (e) => {

		e.preventDefault(); 

		await axios.post("http://localhost:8050/turma", turma); 
		navigate("/listarturmas"); 
	}

  return (

	<div>

		<Navbar_turma/>

		<div className="AddTurma">

		<div className="addContainer"> 

			<h1> Cadastro de Turmas</h1> 

			<form onSubmit={(e) => onSubmit(e)}> 

				<div className="input-container">
					<label>Nome </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Nome"} 
					name="nome" 
					value={nome} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div>

				<div className="input-container">
					<label>Valor </label>
					<input type={"number"} className={"form-control"} 
					placeholder={"Valor"} 
					name="valor" 
					value={valor} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div>

				<button type={"submit"} className="addBut">
					<p>Cadastrar</p>
				</button>
			</form>

		</div>

	  </div>
	  
	</div>

  )
  
}


