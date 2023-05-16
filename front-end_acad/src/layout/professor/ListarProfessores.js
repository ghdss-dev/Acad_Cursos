import React, { useEffect, useState } from 'react';
import Navbar_professor from './Navbar_professor';
import './ListarProfessores.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListarProfessores() {

	const [professores, setProfessores] = useState([]);
	const [turmas, setTurmas] = useState([]);

	useEffect(() => {

		loadProfessores()

	}, [])

	const loadProfessores = async () => {

		const result = await axios.get("http://localhost:8050/professor") 
		const turmasResult = await axios.get("http://localhost:8050/turma");
		setProfessores(result.data)
		setTurmas(turmasResult.data);
	}

	const getTurmaName = (turmaId) => {
		const turma = turmas.find((t) => t.id === turmaId);
		return turma ? turma.nome : "";
	}

	const deleteProfessor = async (id) => {

		await axios.delete(`http://localhost:8050/professor/${id}`); 
		loadProfessores();
	}


  return (
	
	<div>

		<Navbar_professor/> 

		<h1>Visualização de Professores</h1>

		<div className="text-center">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Telefone</th>
						<th>Valor Hora Aula</th>
						<th>Turmas</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>

				{
					professores.map((professor, index) => (

						<tr key={index}> 
							<th scope="row">{index+1}</th> 
							<td>{professor.nome}</td>
							<td>{professor.telefone}</td>
							<td>{professor.valorhoraaula}</td>
							<td>{getTurmaName(professor.turmaId)}</td>
							<td> 
								<div className="btn-group" role="group">
									<Link className="btn btn-primary" exat to={`/editarprofessor/${professor.id}`}>Editar</Link> 
									<button className="btn btn-excluir" onClick={() => deleteProfessor(professor.id)}>Deletar</button>
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
