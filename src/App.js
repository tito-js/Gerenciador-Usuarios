import React from 'react';
import "./App.css";
import Listagem from "./Componentes/Listagem";
import Cadastro from './Componentes/Cadastro';


function App() {

	// const [ nome, setNome] = React.useState("");
	// const [ status, setStatus] = React.useState(true);
	
	// function salvar(e){
	// 	e.preventDefault()

	// 	const Usuario = {
	// 		nome: nome, 
	// 		status: status
	// 	}

	// 	//O operador ... se chama spread ou "despejar"
	// 	setUsuarios([...usuarios, Usuario])
	// 	//usuarios.push(usuario)
	// }

	// Como Funciona os objetos em JavaScript
	// const usuario = {
	// 	// chave: valor
	// 	nome: "Conrado",
	// 	idade: 15,
	// 	status: true,
	// 	endereco: {
	// 		rua: "Rua x",
	// 		numero: 139,
	// 		complemneto:"ap 20"
	// 	},
	// 	vacinas_covid19:["Pfizer", "Pfizer", "Pfizer", "J&J"]
	// }
	
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

			<Listagem usuarios={usuarios}/>


			<Cadastro usuarios={usuarios} setUsuarios={setUsuarios}/>



			{/* <div className="caixa"> 
				<h2> Cadastro </h2>

					<form onSubmit={(e) => salvar(e)}>
						<div class="form-floating mb-3">
							<input onChange={e => setNome(e.target.value)} class="form-control" id="txtNome" placeholder="Nome"/>
							<label for="txtNome">Nome</label>
						</div>

						<div class="mb-3 form-check">
							<input checked={status}onChange={e => setStatus(e.target.checked)} type="checkbox" class="form-check-input" id="cboxStatus"/>
							<label class="form-check-label" for="cboxStatus">Ativo</label>
						</div>

						<button type="submit" class="btn btn-primary">Salvar</button>
					</form>
			</div> */}

		</div>
		
    </div>
  );
}

export default App;