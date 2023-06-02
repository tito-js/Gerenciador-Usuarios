import React from 'react';
import "./App.css";
import Listagem from "./Componentes/Listagem";
import Cadastro from './Componentes/Cadastro';

function App() {
	
	//Como usar um array com objetos dentro
	const Usuarios_Padrao = [
		{nome: "Gabriel", email: "@gmail.com", status: true},
		{nome: "Grazi", email: "@gmail.com", status: true},
		{nome: "Luana", email: "@gmail.com", status: true},
		{nome: "Conrado", email: "@gmail.com", status:false}
	]

	const [ usuarios, setUsuarios] = React.useState(Usuarios_Padrao);

  return (
    <div className="container">

		<div className="d-flex justify-content-around">

			<Listagem usuarios={usuarios} setUsuarios={setUsuarios}/>

			<Cadastro usuarios={usuarios} setUsuarios={setUsuarios}/>

		</div>
		
    </div>
  );
}

export default App;