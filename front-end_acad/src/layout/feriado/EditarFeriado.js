import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar_feriado from './Navbar_feriado';
import './AddFeriado.css';

export default function EditarFeriado() {

	let navigate = useNavigate(); 

	const {id} = useParams()

	const [feriado, setFeriado] = useState({

		descricao: "", 
		
	});

	const {descricao} = feriado; 

	const OnInputChange = (e) => {

		setFeriado({...descricao, [e.target.name]: e.target.value }); 

	}; 

	useEffect(() => {

		loadFeriado()
	}, []) 

	const onSubmit = async (e) => {

		e.preventDefault(); 

		await axios.put(`http://localhost:8050/feriado/${id}`, feriado);
		navigate("/listarferiados"); 
	}; 

	const loadFeriado = async () => {

		const result = await axios.get(`http://localhost:8050/feriado/${id}`); 
		setFeriado(result.data);
	}
  return (

	<div>

	  <Navbar_feriado/>

	  <div className="AddFeriado">

		<div className="addContainer"> 

			<h1> Atualização de Feriados</h1> 

			<form onSubmit={(e) => onSubmit(e)}> 

				<div className="input-container">
					<label>Descrição </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Descrição"} 
					name="descricao" 
					value={descricao} 
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
