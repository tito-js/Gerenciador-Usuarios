function Listagem( props ){

	function remover(usuario){
		const novos_usuarios = props.usuarios.filter(item => item.nome != usuario.nome)
		props.setUsuarios(novos_usuarios)
	}

    return(
        <div className="caixa">
				<h2> Listagem </h2>
				{
					props.usuarios.map( item => 
						    <div style={{border: "1px solid #CCC"}}> 
							<p> Nome: {item.nome}</p>
							<p> Status: {item.status == true ? "Ativo" : "Banido"}</p>
							<p> Email: {item.email}</p>
							<button onClick={()=> remover(item)} className="btn btn-danger bnt-sm">Remover</button>

						</div>
					 )
				}
		</div>
    )
}

export default Listagem;