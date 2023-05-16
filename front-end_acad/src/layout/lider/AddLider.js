import React, {useState} from 'react'
import Navbar_lider from './Navbar_lider'
import './AddLider.css';
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

export default function AddLider() { 

	let navigate = useNavigate(); 

	const [lider, setLider] = useState({

		nome: "", 
		telefone: "",
		status_2: "", 
		observacao: ""

	});

	const {nome, telefone, status_2, observacao} = lider; 

	const OnInputChange = (e) => {

		setLider({...lider, [e.target.name]: e.target.value }); 

	}; 

	const onSubmit = async (e) => {

		e.preventDefault(); 

		console.log(lider)

		await axios.post("http://localhost:8050/lider", lider); 
		navigate("/listarlideres"); 
	}

  return (

	<div>

	  <Navbar_lider/>

	  <div className="AddLider">

		<div className="addContainer"> 

			<h1> Cadastro de Lideres</h1> 

			<form onSubmit={(e) => onSubmit(e)}> 

				<div className="input-container">
					<label>Nome </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Nome"} 
					name="nome" 
					value={nome} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div>

				<div className="input-container">
					<label>Telefone </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Telefone"} 
					name="telefone" 
					value={telefone} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div>

				<div className="input-container">
					<label>Status_2 </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Status_2"} 
					name="status_2" 
					value={status_2} 
					onChange={(e) => OnInputChange(e)} 
					required />
					{/* {renderErrorMessage("uname")} */}
				</div>

				<div className="input-container">
					<label>Observação </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Observação"} 
					name="observacao" 
					value={observacao} 
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


