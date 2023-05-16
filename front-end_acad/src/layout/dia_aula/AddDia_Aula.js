import React, {useState} from 'react'
import Navbar_dia_aula from './Navbar_dia_aula'
import './AddDia_Aula.css';
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

export default function AddDia_Aula() {

	let navigate = useNavigate(); 

	const [daula, setDiaAula] = useState({

		data_aula: Date 
		
	});

	const {data_aula} = daula; 

	const OnInputChange = (e) => {

		setDiaAula({...daula, [e.target.name]: e.target.value }); 

	}; 

	const onSubmit = async (e) => {

		e.preventDefault(); 

		console.table(daula)

		await axios.post("http://localhost:8050/dia_aula", daula); 
		navigate("/listardiasaulas"); 
	}


  return (

	<div>

	  <Navbar_dia_aula/>

	  <div className="AddDia_Aula">

		<div className="addContainer"> 

			<h1> Cadastro de Dias Aulas</h1> 

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
					<p>Cadastrar</p>
				</button>
			</form>

		</div>

	  </div>

	</div>

  )

}
