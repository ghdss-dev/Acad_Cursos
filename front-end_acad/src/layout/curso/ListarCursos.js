import React, { useEffect, useState } from 'react';
import Navbar_curso from './Navbar_curso';
import './ListarCursos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from "date-fns";

export default function ListarCursos() {

	const [cursos, setCurso] = useState([]);
	const [turmas, setTurmas] = useState([]);
	const [dias_aulas, setDiasAulas] = useState([]);

	useEffect(() => {

		loadCursos()

	}, [])

	const loadCursos = async () => {

		const result = await axios.get("http://localhost:8050/curso") 
		const turmasResult = await axios.get("http://localhost:8050/turma");
		const diasAulasResult = await axios.get("http://localhost:8050/dia_aula")
		setCurso(result.data)
		setTurmas(turmasResult.data); 
		setDiasAulas(diasAulasResult.data);
	}

	const getTurmaName = (turmaId) => {
		const turma = turmas.find((t) => t.id === turmaId);
		return turma ? turma.nome : "";
	}

	const getDiaAulaDate = (cursoId) => {
		const dia_aula = dias_aulas.find((t) => t.id === cursoId);
		return dia_aula ? format(new Date(dia_aula.data_aula), "dd/MM/yyyy") : "";
	};

	

	const deleteCurso = async (id) => {

		await axios.delete(`http://localhost:8050/curso/${id}`); 
		loadCursos();
	}

  return (
	
	<div>

		<Navbar_curso/> 

		<h1>Visualização de Cursos</h1>

		<div className="text-center">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome do Curso</th>
						<th>Hora Aula</th>
						<th>Hora Total</th>
						<th>Turno</th>
						<th>Valor</th>
						<th>Segunda</th>
						<th>Terça</th>
						<th>Quarta</th>
						<th>Quinta</th>
						<th>Sexta</th>
						<th>Sabádo</th>
						<th>Turmas</th>
						<th>Dia Aula</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>

				{
					cursos.map((curso, index) => (

						<tr key={index}> 
							<th scope="row">{index+1}</th> 
							<td>{curso.nomecurso}</td>
							<td>{curso.chaula}</td>
							<td>{curso.chtotal}</td> 
							<td>{curso.turno}</td>
							<td>{curso.valor}</td>
							<td>{curso.seg}</td>
							<td>{curso.ter}</td>
							<td>{curso.qua}</td>
							<td>{curso.qui}</td>
							<td>{curso.sex}</td>
							<td>{curso.sab}</td>
							<td>{getTurmaName(curso.turmaId)}</td>
							<td>{getDiaAulaDate(curso.cursoId)}</td>
							<td> 
								<div className="btn-group" role="group">
									<Link className="btn btn-primary" exat to={`/editarcurso/${curso.id}`}>Editar</Link> 
									<button className="btn btn-excluir" onClick={() => deleteCurso(curso.id)}>Deletar</button>
								</div>
							</td>
						</tr>
					))
				}
				
				</tbody>

			</table>
		</div>				
	  
	</div>

  )

}
