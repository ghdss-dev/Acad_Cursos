import React, { useEffect, useState } from 'react'
import Navbar_feriado from './Navbar_feriado' 
import './ListarFeriados.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function ListarFeriados() {

	const [feriados, setFeriados] = useState([]); 

	useEffect(() => {

		loadFeriados();

	}, []);

	const loadFeriados = async () => {

		const result = await axios.get("http://localhost:8050/feriado"); 
		setFeriados(result.data); 
	} 

	const deletarFeriado = async (id) => {

		await axios.delete(`http://localhost:8050/feriado/${id}`); 
		loadFeriados();
	}

  return (

	<div>
	
	  <Navbar_feriado/>

	  <h1>Visualização de s</h1>

		<div className="text-center">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Descrição</th>
						<th>Data de Feriado</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>

				{
					feriados.map((feriado, index) => (

						<tr key={index}> 
							<th scope="row">{index+1}</th> 
							<td>{feriado.descricao}</td>
							<td>{format(new Date(feriado.data_feriado), 'dd/MM/yyyy')}</td>

							<td> 
								<div className="btn-group" role="group">
									<Link className="btn btn-primary" exat to={`/editarferiado/${feriado.id}`}>Editar</Link> 
									<button className="btn btn-excluir" onClick={() => deletarFeriado(feriado.id)}>Deletar</button>
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
