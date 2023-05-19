import "./App.css"
import Listagem from "./Componentes/Listagem"

function App() {

	// Como Funciona os objetos em JavaScript
	const usuario = {
		// chave: valor
		nome: "Conrado",
		idade: 15,
		status: true,
		endereco: {
			rua: "Rua x",
			numero: 139,
			complemneto:"ap 20"
		},
		vacinas_covid19:["Pfizer", "Pfizer", "Pfizer", "J&J"]
	}
	//console.log(usuario)
	//console.log(usuario.endereco.rua)
	//conselo.log( Objects.key(usuario))

	//Como usar um array com objetos dentro
	const usuarios = [
		{nome: "Gabriel", status: true},
		{nome: "Grazi", status: true},
		{nome: "Luana", status: true},
		{nome: "Conrado", status:false}
	]

  return (
      <div className="container">


		<div className="d-flex justify-content-around">

			<Listagem usuarios={usuarios} />

			<div className="caixa"> 
				<h2> Cadastro </h2>
			</div>

		</div>
		

      </div>
  );
}

export default App;