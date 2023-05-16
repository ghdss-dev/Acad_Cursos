import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"; 
import Navbar_aluno from './Navbar_aluno';
import './AddAluno.css';

export default function EditarAluno() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [aluno, setAluno] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    cpf: "",
    turmaId: 0,
  });

  const [turmas, setTurmas] = useState([]);
  const [options, setOptions] = useState([]);

  const { nome, telefone, endereco, cpf, turmaId } = aluno;

  useEffect(() => {
    fetch(`http://localhost:8050/turma/`)
      .then((data) => data.json())
      .then((val) => {
        setTurmas(val);
        setOptions(
          val.map((turma) => ({
            label: turma.nome,
            value: turma.id,
          }))
        );
      });
  }, []);

  useEffect(() => {
    (async () => {
      await loadAlunos();
    })();
  }, [id]);

  const OnInputChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const novoAluno = {
      ...aluno,
      turmaId: document.querySelector("#turma").value,
    };

    console.log(novoAluno);

    await axios.put(`http://localhost:8050/aluno/${id}`, novoAluno);

    navigate("/listaralunos");
  };

  const loadAlunos = async () => {
    const result = await axios.get(`http://localhost:8050/aluno/${id}`);
    setAluno(result.data);
  };
  return (

	<div>

	  <Navbar_aluno/>

	  <div className="AddAluno">

		<div className="addContainer"> 

			<h1> Atualização de Alunos</h1> 

			<form onSubmit={(e) => onSubmit(e)}> 

				<div className="input-container">
					<label>Nome </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Nome"} 
					name="nome" 
					value={nome} 
					onChange={(e) => OnInputChange(e)} 
					required />
					
				</div> 

				<div className="input-container">
					<label>Telefone </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Telefone"} 
					name="telefone" 
					value={telefone} 
					onChange={(e) => OnInputChange(e)} 
					required />
					
				</div> 

				<div className="input-container">
					<label>Endereço </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Endereço"} 
					name="endereco" 
					value={endereco} 
					onChange={(e) => OnInputChange(e)} 
					required />
					
				</div> 

				<div className="input-container">
					<label>Cpf </label>
					<input type={"text"} className={"form-control"} 
					placeholder={"Cpf"} 
					name="cpf" 
					value={cpf} 
					onChange={(e) => OnInputChange(e)} 
					required />
					
				</div>

				<div>
					<label htmlFor="turma">Turma:</label>
					<select id="turma" name="turmaId" value={turmaId} onChange={OnInputChange}>
						{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
						))}
					</select>
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
