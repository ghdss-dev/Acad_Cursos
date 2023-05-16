import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar_curso from './Navbar_curso';
import './AddCurso.css';

export default function EditarCurso() {

	const navigate = useNavigate(); 

	const {id} = useParams();

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

	const [turmas, setTurmas] = useState([]);
	const [dias_aulas, setDia_Aulas] = useState([]);
	const [options, setOptions] = useState([]); 
	const [options1, setOptions1] = useState([]);

	const {nomecurso, chaula, chtotal, turno, valor, seg, ter, qua, qui, sex, sab, turmaId, cursoId} = curso; 

	useEffect(() => {
		fetch(`http://localhost:8050/turma/`)
		  .then((data) => data.json())
		  .then((val) => {
			setTurmas(val);
			setOptions(
			  val.map((turma) => ({
				label: turma.nome,
				value: turma.id,
			  }))
			);
		  });
	}, []);

	useEffect(() => {
	(async () => {
		await loadCursos();
	})();
	}, [id]);

	useEffect(() => {
	fetch(`http://localhost:8050/dia_aula/`)
		.then((data) => data.json())
		.then((val1) => {
		setDia_Aulas(val1);
		setOptions1(
			val1.map((dia_aula) => ({
			label: dia_aula.data_aula,
			value: dia_aula.id,
			}))
		);
		});
	}, []);

	const OnInputChange = (e) => {

		setCurso({ ...curso, [e.target.name]: e.target.value}); 
	}

	const onSubmit = async (e) => {
		e.preventDefault();
	
		const novoCurso = {
		  ...curso,
		  turmaId: document.querySelector("#turma").value,
		  cursoId: document.querySelector("#dia_aula").value,
		};
	
		console.log(novoCurso);
	
		await axios.put(`http://localhost:8050/curso/${id}`, novoCurso);
	
		navigate("/listarcursos");
	};

	const loadCursos = async () => {
		const result = await axios.get(`http://localhost:8050/curso/${id}`);
		setCurso(result.data);
	};

  return (

	<div>

		<Navbar_curso/>

		<div className="AddCurso">

			<div className="container">

			<h1> Atualizar de Cursos</h1> 
				
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

						<div>
							<label htmlFor="turma">Turma:</label>
							<select id="turma" name="turmaId" value={turmaId} onChange={OnInputChange}>
								{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
								))}
							</select>
						</div>

						<div>
							<label htmlFor="dia_aula">Dia_Aula</label>
							<select id="dia_aula" name="cursoId" value={cursoId} onChange={OnInputChange}>
								{options1.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
								))}
							</select>
						</div>

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
