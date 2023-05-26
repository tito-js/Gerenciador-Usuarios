import React from "react";

function Cadastro({usuarios,setUsuarios}){

    const [ nome, setNome] = React.useState("");
    const [ status, setStatus] = React.useState(true);
    const [ email, setEmail] = React.useState("");
    
    
    function salvar(e){
        e.preventDefault()
    
        const Usuario = {
            nome: nome, 
            status: status,
            email: email
        }
        //O operador ... se chama spread ou "despejar"
        setUsuarios([...usuarios, Usuario])
    }

    return(
        <div className="caixa"> 
				<h2> Cadastro </h2>

					<form onSubmit={(e) => salvar(e)}>
						<div class="form-floating mb-3">
							<input onChange={e => setNome(e.target.value)} class="form-control" id="txtNome" placeholder="Nome"/>
							<label for="txtNome">Nome</label>
						</div>

                        <div class="form-floating mb-3">
                            <input onChange={e => setEmail(e.target.value)}type="email" class="form-control" id="txtEmail" placeholder="name@example.com"/>
                            <label for="txtEmail">Endereço de Email</label>
                        </div>

						<div class="mb-3 form-check">
							<input checked={status} onChange={e => setStatus(e.target.checked)} type="checkbox" class="form-check-input" id="cboxStatus"/>
							<label class="form-check-label" for="cboxStatus">Ativo</label>
						</div>

						<button type="submit" class="btn btn-primary">Salvar</button>
					</form>
			</div>

    )
}

export default Cadastro