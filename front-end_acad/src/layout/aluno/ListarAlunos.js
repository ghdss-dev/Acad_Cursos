import React, { useEffect, useState } from 'react';
import Navbar_aluno from './Navbar_aluno';
import './ListarAlunos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListarAlunos() {

	const [alunos, setAluno] = useState([]);
	const [turmas, setTurmas] = useState([]);

	useEffect(() => {

		loadAlunos()

	}, [])

	const loadAlunos = async () => {

		const result = await axios.get("http://localhost:8050/aluno") 
		const turmasResult = await axios.get("http://localhost:8050/turma");
		setAluno(result.data)
		setTurmas(turmasResult.data);
	}

	const getTurmaName = (turmaId) => {
		const turma = turmas.find((t) => t.id === turmaId);
		return turma ? turma.nome : "";
	}

	const deleteAluno = async (id) => {

		await axios.delete(`http://localhost:8050/aluno/${id}`); 
		loadAlunos();
	}

  return (

	<div>

		<Navbar_aluno/> 

		<h1>Visualização de Alunos</h1>

		<div className="text-center">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Telefone</th>
						<th>Endereço</th>
						<th>Cpf</th>
						<th>Turmas</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>

				{
					alunos.map((aluno, index) => (

						<tr key={index}> 
							<th scope="row">{index+1}</th> 
							<td>{aluno.nome}</td>
							<td>{aluno.telefone}</td>
							<td>{aluno.endereco}</td> 
							<td>{aluno.cpf}</td>
							<td>{getTurmaName(aluno.turmaId)}</td>
							<td> 
								<div className="btn-group" role="group">
									<Link className="btn btn-primary" exat to={`/editaraluno/${aluno.id}`}>Editar</Link> 
									<button className="btn btn-excluir" onClick={() => deleteAluno(aluno.id)}>Deletar</button>
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
