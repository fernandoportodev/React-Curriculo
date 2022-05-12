import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const Formulario = (props) => {
    const navigate = useNavigate();

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
        localStorage.setItem(valores.nome, JSON.stringify(valores))
        setValores(valoresIniciais)
        
    }
    



    return(
        <div>
            
            <div className="d-flex my-5 justify-content-between">
                <h1 className="text-center">Adicionar Currículo</h1>
                <button className="btn btn-outline-dark" onClick={() => navigate("/inicio")}>Voltar</button>
            <div />
        </div>

        <div className="card border-primary p-5 m-5">
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
                    placeholder="Digite seu Nome" />
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
                    placeholder="Digite seu e-mail" />
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
                    placeholder="Digite seu telefone" />
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
                    placeholder="Digite seu RG" />
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
                    placeholder="Digite seu endereço" />
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
                    placeholder="Digite seu GitHub" />
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
                    placeholder="Digite seu LinkedIn" />
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
                    placeholder="Digite seu nível de educação:" />
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
                    placeholder="Digite seu cargo" />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="experiencia">Experiências:</label>
                    <textarea 
                    name="experiencia" 
                    id="experiencia"
                    value={valores.experiencia}
                    onChange={manipuladorValores}
                    className="form-control"></textarea>
                </div>
                

                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="sobre">Sobre você:</label>
                    <textarea 
                    name="sobre" 
                    id="sobre"
                    value={valores.sobre}
                    onChange={manipuladorValores}
                    className="form-control"></textarea>
                </div>



                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-outline-success" >Adicionar Currículo</button>
                
                </div>

            </form>
        </div>


    </div>
    )
}
