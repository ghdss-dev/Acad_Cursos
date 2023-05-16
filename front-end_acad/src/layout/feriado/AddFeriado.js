import React, {useState} from 'react'
import Navbar_feriado from './Navbar_feriado'
import './AddFeriado.css';
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

export default function AddFeriado() {

	let navigate = useNavigate(); 

	const [feriado, setFeriado] = useState({

		descricao: "", 
		
	});

	const {descricao} = feriado; 

	const OnInputChange = (e) => {

		setFeriado({...feriado, [e.target.name]: e.target.value }); 

	}; 

	const onSubmit = async (e) => {

		e.preventDefault(); 

		console.log(feriado)

		await axios.post("http://localhost:8050/feriado", feriado); 
		navigate("/listarferiados"); 
	}

  return (

	<div>

	  <Navbar_feriado/>

	  <div className="AddFeriado">

		<div className="addContainer"> 

			<h1> Cadastro de Feriados</h1> 

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
					<p>Cadastrar</p>
				</button>
			</form>

		</div>

	  </div>

	</div>
  )
  
}
