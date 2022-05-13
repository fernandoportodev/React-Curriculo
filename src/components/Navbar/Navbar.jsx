import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#!" onClick={() => navigate("/")}>
            CMS Currículos
        </a>

        <button 
        className="navbar-toggler btn btn-outline-secondary my-2 my-sm-0 text-white" 
        onClick={() => navigate("/adicionarcurriculo")}
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="true"
        aria-label="Toggle navigation"
        >Adicionar Currículo</button>
        
        <button 
        className="navbar-toggler btn btn-outline-secondary my-2 my-sm-0 ms-3 text-white" 
        onClick={() => navigate("/listacurriculo")}
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="true"
        aria-label="Toggle navigation"
        >Lista Currículos</button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
            </ul>
            <button 
            className="btn btn-outline-secondary my-2 my-sm-0" 
            onClick={() => navigate("/adicionarcurriculo")}
            >Adicionar Currículo</button>

            <button 
            className="btn btn-outline-secondary my-2 my-sm-0 ms-3" 
            onClick={() => navigate("/listacurriculo")}
            >Lista Currículos</button>
        </div>
    </div>
    </nav>
    )
}