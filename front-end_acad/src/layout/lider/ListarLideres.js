import React, { useEffect, useState } from 'react'
import Navbar_lider from './Navbar_lider'
import './ListarLideres.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


export default function ListarLideres() {

	const [lideres, setLideres] = useState([]); 

	useEffect(() => {

		loadLideres();

	}, []);

	const loadLideres = async () => {

		const result = await axios.get("http://localhost:8050/lider"); 
		setLideres(result.data); 
	} 

	const deletarLider = async (id) => {

		await axios.delete(`http://localhost:8050/lider/${id}`); 
		loadLideres();
	}

  return (

	<div>
	
	  <Navbar_lider/>

	  <h1>Visualização de Lideres</h1>

		<div className="text-center">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Telefone</th>
						<th>Data de Cadastro</th>
						<th>Status</th>
						<th>Data de Novo Contato </th> 
						<th>Observação</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>

				{
					lideres.map((lider, index) => (

						<tr key={index}>
							<th scope="row">{index+1}</th> 
							<td>{lider.nome}</td>
							<td>{lider.telefone}</td>
							<td>{format(new Date(lider.data_cadastro), 'dd/MM/yyyy')}</td>
							<td>{lider.status_2}</td>
							<td>{format(new Date(lider.data_novo_contato), 'dd/MM/yyyy')}</td>
							<td>{lider.observacao}</td>

							<td> 
								<div className="btn-group" role="group">
									<Link className="btn btn-primary" exat to={`/editarlider/${lider.id}`}>Editar</Link> 
									<button className="btn btn-excluir" onClick={() => deletarLider(lider.id)}>Deletar</button>
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
