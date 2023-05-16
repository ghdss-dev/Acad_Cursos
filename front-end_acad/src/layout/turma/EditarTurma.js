import React, {useState, useEffect} from 'react';
import Navbar_turma from './Navbar_turma';
import './AddTurma.css';
import axios from "axios"; 
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarTurma() {

	let navigate = useNavigate(); 

	const {id} = useParams()

	const [turma, setTurma] = useState({

		nome: "",
		valor: Number, 
		
	});

	const {nome, valor} = turma; 

	const OnInputChange = (e) => {

		setTurma({...turma, [e.target.name]: e.target.value }); 

	}; 

	useEffect(() => {

		loadTurma()
	}, []) 

	const onSubmit = async (e) => {

		e.preventDefault(); 

		await axios.put(`http://localhost:8050/turma/${id}`, turma);
		navigate("/listarturmas"); 
	}; 

	const loadTurma = async () => {

		const result = await axios.get(`http://localhost:8050/turma/${id}`); 
		setTurma(result.data);
	}
  return (

	<div>

		<Navbar_turma/>

		<div className="AddTurma">

		<div className="addContainer"> 

			<h1> Atualização de Turmas</h1> 

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
					<p>Atualizar</p>
				</button>
			</form>

		</div>

	  </div>
	  
	</div>

  )

}
