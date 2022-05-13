import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Formulario.css"

export const Formulario = () => {

    const valoresIniciais = {
        nome: '',
        email: '',
        telefone: '',
        rg: '',
        endereco: '',
        github: '',
        linkedin: '',
        educacao: '',
        cargo: '',
        experiencia: '',
        sobre: '',
    }

    let [valores, setValores] = useState(valoresIniciais)

    const manipuladorValores = e =>{
        let {name, value} = e.target
        setValores({...valores, [name] : value})
    }

    const manipuladorEnvioForm = e =>{
        e.preventDefault();
        //Enviando para o localStorage os valores, transformados em String pelo JSON no valores.email
        localStorage.setItem(valores.email, JSON.stringify(valores))
        
        if(valores.email == ''){
            window.alert('Preencha os dados para envio do Currículo')
        }else{
            window.alert('Currículo adicionado com sucesso')
        }
        setValores(valoresIniciais)
    }

    const [mostrar, setMostrar] = useState(false)

    const mostrarModal = () => setMostrar(true); 
    const fecharModal = () => setMostrar(false) ;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1500,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 20,
        p: 4,  
    };

    return(
        <div>
            
            <div className="d-flex my-5 justify-content-center text-center">
                <h1 className="text-center">Adicionar Currículo</h1>
            <div />
        </div>

        <div className="card border-primary p-5 m-5">
            <button className="btn btn-outline-dark " onClick={mostrarModal}>Importar Curriculo formato JSON</button>
                <Modal
                    open={mostrar}
                    onClose={fecharModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" className="text-center" variant="h6" component="h2">
                            Importe o currículo em formato JSON:
                            <hr />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            <form>
                                <textarea 
                                    name="importar" 
                                    id="importar"
                                    className="form-control"></textarea>
                            </form>
                        </Typography>
                    </Box>
                </Modal>

            <form onSubmit={manipuladorEnvioForm}>
                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="nome">Nome:</label>
                    <input 
                    type="text"
                    name="nome" 
                    className="form-control" 
                    id="nome"
                    value={valores.nome}
                    onChange={manipuladorValores}
                    placeholder="Digite seu Nome"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="email">E-mail:</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={valores.email}
                    onChange={manipuladorValores}
                    placeholder="Digite seu e-mail"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="telefone">Telefone: </label>
                    <input 
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={valores.telefone}
                    onChange={manipuladorValores}
                    className="form-control" 
                    placeholder="Digite seu telefone"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="rg">RG:</label>
                    <input 
                    type="number" 
                    id="rg"
                    name="rg"
                    value={valores.rg}
                    onChange={manipuladorValores}
                    className="form-control" 
                    placeholder="Digite seu RG"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="endereco">Endereço:</label>
                    <input 
                    type="text" 
                    id="endereco"
                    name="endereco"
                    value={valores.endereco}
                    onChange={manipuladorValores}
                    className="form-control" 
                    placeholder="Digite seu endereço"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="github">GitHub:</label>
                    <input 
                    type="url" 
                    id="github"
                    name="github"
                    value={valores.github}
                    onChange={manipuladorValores}
                    className="form-control" 
                    placeholder="Digite seu GitHub"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="linkedin">LinkedIn:</label>
                    <input 
                    type="url" 
                    id="linkedin"
                    name="linkedin"
                    value={valores.linkedin}
                    onChange={manipuladorValores}
                    className="form-control" 
                    placeholder="Digite seu LinkedIn"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="educacao">Educação:</label>
                    <input 
                    type="text" 
                    id="educacao"
                    name="educacao"
                    value={valores.educacao}
                    onChange={manipuladorValores}
                    className="form-control" 
                    placeholder="Digite seu nível de educação:"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="cargo">Cargo:</label>
                    <input 
                    type="text" 
                    id="cargo"
                    name="cargo"
                    value={valores.cargo}
                    onChange={manipuladorValores}
                    className="form-control" 
                    placeholder="Digite seu cargo"
                    required />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="experiencia">Experiências:</label>
                    <textarea 
                    name="experiencia" 
                    id="experiencia"
                    value={valores.experiencia}
                    onChange={manipuladorValores}
                    className="form-control"
                    required></textarea>
                </div>
                
                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="sobre">Sobre você:</label>
                    <textarea 
                    name="sobre" 
                    id="sobre"
                    value={valores.sobre}
                    onChange={manipuladorValores}
                    className="form-control"
                    required></textarea>
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-outline-success">Adicionar Currículo</button>
                </div>
            </form>
        </div>
    </div>
    )
}

