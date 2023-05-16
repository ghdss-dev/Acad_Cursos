import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
import Navbar_curso from './Navbar_curso';
import './AddCurso.css';

export default function AddCurso() {

	let navigate = useNavigate(); 

	const [curso, setCurso] = useState({

		nomecurso: "",
		chaula: Number,
		chtotal: Number,
		turno: "",
		valor: Number,
		seg: Number,
		ter: Number,
		qua: Number,
		qui: Number,
		sex: Number, 
		sab: Number,
		turmaId: 0,
		cursoId: 0
		
	});

	const [turmas, setTurmas] = useState([]) 

	const [dias_aulas, setDiasAulas] = useState([])

	const [options, setOptions] = useState()

	const {nomecurso, chaula, chtotal, turno, valor, seg, ter, qua, qui, sex, sab, turmaId, cursoId} = curso; 

	useEffect(() => {

		fetch("http://localhost:8050/turma/"). 
		then((data) => data.json()).then((val) => setTurmas(val))
	}, []) 

	useEffect(() => {

		fetch("http://localhost:8050/dia_aula/"). 
		then((data) => data.json()).then((val) => setDiasAulas(val))
	}, []) 

	const OnInputChange = (e) => {

		setCurso({ ...curso, [e.target.name]: e.target.value}); 
	}

	const onSubmit = async (e) => {

		e.preventDefault(); 

		console.log(curso);

		await axios.post("http://localhost:8050/curso", {

		...curso, 
		turmaId: document.getElementById("turma").value,
		cursoId: document.getElementById("dia_aula").value
	});

		navigate("/listarcursos"); 

	}

  return (

	<div>

		<Navbar_curso/>

		<div className="AddCurso">

			<div className="container">

			<h1> Cadastro de Cursos</h1> 
				
				<form onSubmit={(e) => onSubmit(e)}>

					<div className="user-details">

						<div className="input-box">

							<span class="details">Nome do Curso</span>
							<input type="text" 
							placeholder="Nome do Curso" 
							name="nomecurso" 
							value={nomecurso} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Hora Aula</span>
							<input type="number" 
							placeholder="Hora Aula" 
							name="chaula" 
							value={chaula} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Hora Total</span>
							<input type="number" 
							placeholder="Hora Total" 
							name="chtotal" 
							value={chtotal} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Turno</span>
							<input type="text" 
							placeholder="Turno" 
							name="turno" 
							value={turno} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div> 

						<div className="input-box">

							<span class="details">Valor</span>
							<input type="number" 
							placeholder="Valor" 
							name="valor" 
							value={valor} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Segunda</span>
							<input type="number" 
							placeholder="Segunda" 
							name="seg" 
							value={seg} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Terça-Feira</span>
							<input type="number" 
							placeholder="Terça-Feira" 
							name="ter" 
							value={ter} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Quarta-Feira</span>
							<input type="number" 
							placeholder="Quarta-Feira" 
							name="qua" 
							value={qua} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Quinta-Feira</span>
							<input type="number" 
							placeholder="Quinta-Feira" 
							name="qui" 
							value={qui} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>
						
						<div className="input-box">

							<span class="details">Sexta-Feira</span>
							<input type="number" 
							placeholder="Sexta-Feira" 
							name="sex" 
							value={sex} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div> 

						<div className="input-box">

							<span class="details">Sexta-Feira</span>
							<input type="number" 
							placeholder="Sexta-Feira" 
							name="sex" 
							value={sex} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
						</div>

						<div className="input-box">

							<span class="details">Sabádo</span>
							<input type="number" 
							placeholder="Sabádo" 
							name="sab" 
							value={sab} 
							onChange={(e) => OnInputChange(e)} 
							required></input>
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

						<div className={"mb-3"} >

							<label htmlFor={"Dia_Aula"} className={"form-label"}>
								Dia_Aula:
							</label>
							
							<select className="form-control" id="dia_aula" onChange={(e)=>setOptions(e.target.value)}>
								{
									dias_aulas.map((dia_aula)=><option value={dia_aula.id} name={"dia_aula"} key={dia_aula.id}>{dia_aula.data_aula}</option>)
								}
							</select>
							
						</div>

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
