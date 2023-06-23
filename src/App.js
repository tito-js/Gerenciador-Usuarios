import React from 'react';
import "./App.css";
import Listagem from "./Componentes/Listagem";
import Cadastro from './Componentes/Cadastro';
import supabase from './supabase';

function App() {
	
	const [ usuarios, setUsuarios] = React.useState([]);

	function buscaTodos(){
		supabase.from("usuarios").select()
		.then( response => {
			console.log("Conexão bem sucedida!")
			console.log( response.data )
			setUsuarios( response.data )
		} )
		.catch( response => {
			console.log("Deu erro na conexão ai")
			console.log( response )
		} )
	}

	React.useEffect( ()=> {
		buscaTodos();

	}, [] )

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