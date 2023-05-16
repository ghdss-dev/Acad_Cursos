import './Content.scss';

import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AddAluno from '../layout/aluno/AddAluno';
import EditarAluno from '../layout/aluno/EditarAluno';
import ListarAlunos from '../layout/aluno/ListarAlunos';
import AddDia_Aula from '../layout/dia_aula/AddDia_Aula';
import EditarDia_Aula from '../layout/dia_aula/EditarDia_Aula';
import ListarDia_Aula from '../layout/dia_aula/ListarDia_Aula';
import AddFeriado from '../layout/feriado/AddFeriado';
import EditarFeriado from '../layout/feriado/EditarFeriado';
import ListarFeriados from '../layout/feriado/ListarFeriados';
import AddLider from '../layout/lider/AddLider';
import EditarLider from '../layout/lider/EditarLider';
import ListarLideres from '../layout/lider/ListarLideres';
import AddProfessor from '../layout/professor/AddProfessor';
import EditarProfessor from '../layout/professor/EditarProfessor';
import ListarProfessores from '../layout/professor/ListarProfessores';
import AddTurma from '../layout/turma/AddTurma';
import EditarTurma from '../layout/turma/EditarTurma';
import ListarTurmas from '../layout/turma/ListarTurmas';
import HomeAluno from '../pages/HomeAluno';
import HomeCurso from '../pages/HomeCurso';
import HomeDescricao from '../pages/HomeDescricao';
import HomeDia_Aula from '../pages/HomeDia_Aula';
import HomeFeriado from '../pages/HomeFeriado';
import HomeLider from '../pages/HomeLider';
import HomeProfessor from '../pages/HomeProfessor';
import HomeTurma from '../pages/HomeTurma';
import AddCurso from '../layout/curso/AddCurso';
import ListarCursos from '../layout/curso/ListarCursos';
import EditarCurso from '../layout/curso/EditarCurso';

const routes = [ 

	// Home = Inicio 
	{path: "/descricao", name: "Descricao", Component: HomeDescricao}, 
	{path: "/aluno", Component: HomeAluno},
	{path: "/lider", Component: HomeLider},
	{path: "/feriado", Component: HomeFeriado},
	{path: "/turma", Component: HomeTurma},
	{path: "/professor", Component: HomeProfessor},
	{path: "/dia_aula", Component: HomeDia_Aula},
	{path: "/curso", Component: HomeCurso},

	// Adicionar 
	{path: "addlider", Component: AddLider},
	{path: "addferiado", Component: AddFeriado},
	{path: "addaluno", Component: AddAluno},
	{path: "addturma", Component: AddTurma}, 
	{path: "addprofessor", Component: AddProfessor}, 
	{path: "adddiasaulas", Component: AddDia_Aula},
	{path: "addcurso", Component: AddCurso},

	// Editar 
	{path: "/editarlider/:id", Component: EditarLider},
	{path: "/editarferiado/:id", Component: EditarFeriado},
	{path: "/editaraluno/:id", Component: EditarAluno},
	{path: "/editarturma/:id", Component: EditarTurma},
	{path: "/editarprofessor/:id", Component: EditarProfessor},
	{path: "/editardiaaula/:id", Component: EditarDia_Aula}, 
	{path: "/editarcurso/:id", Component: EditarCurso},
	
	// Listar
	{path: "listarlideres", Component: ListarLideres}, 
	{path: "listarferiados", Component: ListarFeriados},
	{path: "listaralunos", Component: ListarAlunos},
	{path: "listarturmas", Component: ListarTurmas}, 
	{path: "listarprofessores", Component: ListarProfessores}, 
	{path: "listardiasaulas", Component: ListarDia_Aula},
	{path: "listarcursos", Component: ListarCursos}
]; 

const routeComponents = routes.map(({path, Component}) =>
    <Route path={path} element={<Component/>}/>
);

function Content() {

	const location = useLocation() 

	return(

		<AnimatePresence>

			<Routes key={location.pathname} location={location}>
				{routeComponents}
			</Routes>
		</AnimatePresence>
		
	);
}

export default Content;