import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"; 
import Navbar_professor from './Navbar_professor';
import './AddProfessor.css'
import { set } from 'date-fns';

export default function EditarProfessor() {

	const navigate = useNavigate(); 

	const {id} = useParams();

	const [professor, setProfessor] = useState({

		nome: "", 
		telefone: "", 
		valorhoraaula: Number, 
		turmaId: 0 
	});

	const [turmas, setTurmas] = useState([]);
	const [options, setOptions] = useState([]); 

	const {nome, telefone, valorhoraaula, turmaId} = professor; 

	useEffect(() => {

		fetch(`http://localhost:8050/turma/`)
		.then((data) => data.json()) 
		.then((val) => {
			setTurmas(val); 
			setOptions(
				val.map((turma) => ({

					label: turma.nome, 
					value: turma.id

				}))
			);
		});
	}, []);

	useEffect(() => {

		(async () => {

			await loadProfessores();
		})();
	}, [id]);

	const OnInputChange = async (e) => {

		setProfessor({...professor, [e.target.name]: e.target.value});
	};

	const onSubmit = async (e) => {

		e.preventDefault();

		const novoProfessor = {

			...professor,
			turmaId: document.querySelector("#turma").value,
		}; 

		console.log(novoProfessor);

		await axios.put(`http://localhost:8050/professor/${id}`, novoProfessor);

		navigate("/listarprofessores");
	};

	const loadProfessores = async () => {

		const result = await axios.get(`http://localhost:8050/professor/${id}`);  
		setProfessor(result.data);
	}

  return (

	<div>

	  <Navbar_professor/>

	  <div className="AddAluno">

		<div className="addContainer"> 

			<h1> Atualização de Professores</h1> 

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
					<label>Valor de Hora Aula </label>
					<input type={"number"} className={"form-control"} 
					placeholder={"Valor de Hora Aula"} 
					name="valorhoraaula" 
					value={valorhoraaula} 
					onChange={(e) => OnInputChange(e)} 
					required />
					
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
					<p>Atualizar</p>
				</button>
			</form>

		</div>

	  </div>

	</div>

  )

}
