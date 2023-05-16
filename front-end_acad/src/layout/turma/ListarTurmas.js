import React, { useEffect, useState } from 'react';
import Navbar_turma from './Navbar_turma';
import axios from 'axios';
import './ListarTurmas.css';
import { Link } from 'react-router-dom';

export default function ListarTurmas() {

	const [turmas, setTurmas] = useState([]); 

	useEffect(() => {

		loadTurmas();

	}, []);

	const loadTurmas = async () => {

		const result = await axios.get("http://localhost:8050/turma"); 
		setTurmas(result.data); 
	} 

	const deletarTurma = async (id) => {

		await axios.delete(`http://localhost:8050/turma/${id}`); 
		loadTurmas();
	}

  return (

    <div>

      <Navbar_turma />

	  <h1> Visualização de Turmas</h1>

	  <div className="text-center">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Valor</th>
						<th>Alunos</th>
						<th>Professores</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>

				{
					turmas.map((turma, index) => (

						<tr key={index}>

							<th scope="row">{index+1}</th> 
							<td>{turma.nome}</td>
							<td>{turma.valor}</td>
							
							<td>
								{turma.alunos.map((aluno, index) => (
									<div key={index}>{aluno}</div>
								))}
							</td>

							<td>
								{turma.professores.map((professor, index) => (
									<div key={index}>{professor}</div>
								))}
							</td>
							<td> 
								<div className="btn-group" role="group">
									<Link className="btn btn-primary" exat to={`/editarturma/${turma.id}`}>Editar</Link> 
									<button className="btn btn-excluir" onClick={() => deletarTurma(turma.id)}>Deletar</button>
								</div>
							</td>

						</tr>
					))
				}

				</tbody>

			</table>
		</div>	
      
    </div>
  );
}
