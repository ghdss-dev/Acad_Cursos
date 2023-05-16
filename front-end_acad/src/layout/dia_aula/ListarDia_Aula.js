import React, { useEffect, useState } from 'react'
import Navbardiaaula from './Navbar_dia_aula' 
import './ListarDia_Aula.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function ListarDia_Aula() {

	const [dias_aulas, setDiasAulas] = useState([]); 

	useEffect(() => {

		loadDiasAulas();

	}, []);

	const loadDiasAulas = async () => {

		const result = await axios.get("http://localhost:8050/dia_aula"); 
		setDiasAulas(result.data); 
	} 

	const deletarDiaAula = async (id) => {

		await axios.delete(`http://localhost:8050/dia_aula/${id}`); 
		loadDiasAulas();
	}

  return (

	<div>
	
	  <Navbardiaaula/>

	  <h1>Visualização de Dias Aulas</h1>

		<div className="text-center">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Data de Dia Aula</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>

				{
					dias_aulas.map((dia_aula, index) => (

						<tr key={index}> 
							<th scope="row">{index+1}</th> 
							<td>{format(new Date(dia_aula.data_aula), 'dd/MM/yyyy')}</td>

							<td> 
								<div className="btn-group" role="group">
									<Link className="btn btn-primary" exat to={`/editardiaaula/${dia_aula.id}`}>Editar</Link> 
									<button className="btn btn-excluir" onClick={() => deletarDiaAula(dia_aula.id)}>Deletar</button>
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
