import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
import Navbar_aluno from './Navbar_aluno';
import './AddAluno.css';

export default function AddAluno() {

	let navigate = useNavigate(); 

	const [aluno, setAluno] = useState({

		nome: "", 
		telefone: "", 
		endereco: "", 
		cpf: "",
		turmaId: 0
		
	});

	const [turmas, setTurmas] = useState([])

	const [options, setOptions] = useState()

	const {nome, telefone, endereco, cpf, turmaId} = aluno; 

	useEffect(() => {

		fetch("http://localhost:8050/turma/"). 
		then((data) => data.json()).then((val) => setTurmas(val))
	}, []) 

	const OnInputChange = (e) => {

		setAluno({ ...aluno, [e.target.name]: e.target.value}); 
	}

	const onSubmit = async (e) => {

		e.preventDefault(); 

		console.log(aluno);

		await axios.post("http://localhost:8050/aluno", {

		...aluno, 
		turmaId: document.getElementById("turma").value
		
	});

		navigate("/listaralunos"); 

	}

  return (

	<div>

	  <Navbar_aluno/>

	  <div className="AddAluno">

		<div className="addContainer"> 

			<h1> Cadastro de Alunos</h1> 

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
					<label>Telefone </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Telefone"} 
					name="telefone" 
					value={telefone} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div> 

				<div className="input-container">
					<label>Endereço </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Endereço"} 
					name="endereco" 
					value={endereco} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div> 

				<div className="input-container">
					<label>Cpf </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Cpf"} 
					name="cpf" 
					value={cpf} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div>

				<div className={"mb-3"} >

					<label htmlFor={"Turma"} className={"form-label"}>
						Turma:
					</label>

					<select className="form-control" id="turma" onChange={(e)=>setOptions(e.target.value)}>
						{
							turmas.map((turma)=><option value={turma.id} name={"turma"} key={turma.id}>{turma.nome}</option>)
						}
					</select>

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
