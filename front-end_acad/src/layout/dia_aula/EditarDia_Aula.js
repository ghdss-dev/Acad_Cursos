import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar_dia_aula from './Navbar_dia_aula';
import './AddDia_Aula.css';

export default function EditarDia_Aula() {

	let navigate = useNavigate(); 

	const {id} = useParams(); 

	const [dia_aula, setDiaAula] = useState({

		data_aula: Date 
		
	});

	const {data_aula} = dia_aula; 

	const OnInputChange = (e) => {

		setDiaAula({...data_aula, [e.target.name]: e.target.value }); 

	}; 


	useEffect(() => {

		loadDiaAula()
	}, [])

	const onSubmit = async (e) => {

		e.preventDefault(); 

		await axios.put(`http://localhost:8050/dia_aula/${id}`, dia_aula);
		navigate("/listardiasaulas"); 
	}; 

	const loadDiaAula = async () => {

		const result = await axios.get(`http://localhost:8050/dia_aula/${id}`); 
		setDiaAula(result.data);
	}

  return (

	<div>

	  <Navbar_dia_aula/>

	  <div className="AddDia_Aula">

		<div className="addContainer"> 

			<h1> Atualização de Dias Aulas</h1> 

			<form onSubmit={(e) => onSubmit(e)}> 

				<div className="input-container">
					<label>Data de Aula </label>
					<input type={"date"} className={"form-control"} 
					placeholder={"Data de Aula"} 
					name="data_aula" 
					value={data_aula} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
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
