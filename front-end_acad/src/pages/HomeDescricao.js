import React from "react"; 
import Modelo from "./Modelo";
import acadImg from "../img/acad.jpeg";

function Descricao() {

	return (

		<Modelo title = {"Descricao"} img = {acadImg} 

			paragraph1 = {"Plataforma de cursos online com especialidade em programação  "}
			paragraph2 = {"Lowcode que vai levar você do absoluto zero ao mercado profissional"}
			paragraph3 = {"e com especialidade full - stack, 7 vezes mais rápido"}
			paragraph4 = {"Não perca mais tempo, acelere a sua carreira agora mesmo "} 
			paragraph5 = {"e venha construir uma história de sucesso."} 
			
		/>
	);
}

export default Descricao; 