import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar_lider from './Navbar_lider';
import './AddLider.css';

export default function EditarLider() {

	let navigate = useNavigate(); 

	const {id} = useParams()

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

	useEffect(() => {

		loadLider()
	}, []) 

	const onSubmit = async (e) => {

		e.preventDefault(); 

		await axios.put(`http://localhost:8050/lider/${id}`, lider);
		navigate("/listarlideres"); 
	}; 

	const loadLider = async () => {

		const result = await axios.get(`http://localhost:8050/lider/${id}`); 
		setLider(result.data);
	}

  return (

	<div>

		<Navbar_lider/>

		<div className="AddLider">

			<div className="addContainer"> 

				<h1> Atualização de Lideres</h1> 

				<form onSubmit={(e) => onSubmit(e)}> 

					<div className="input-container">
						<label>Nome </label>
						<input type={"text"} 
						className={"form-control"} 
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
						<p>Atualizar</p>
					</button>
				</form>

			</div>

		</div>

  </div>

  )
}
