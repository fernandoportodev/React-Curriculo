import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#!" onClick={() => navigate("/inicio")}>
            CMS Currículos
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
            </ul>

            <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={() => navigate("/adicionarcurriculo")}>Adicionar Currículo</button>
            <button className="btn btn-outline-secondary my-2 my-sm-0 ms-3" onClick={() => navigate("/listacurriculo")}>Lista Currículos</button>
        
        </div>
    </div>
    </nav>
    )
}