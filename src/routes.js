import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Formulario } from "./components/Formulario/Formulario";
import { Inicio } from "./components/Inicio/Inicio";
import { ListaCurriculo } from "./components/Lista/ListaCurriculo";
import { Navbar } from "./components/Navbar/Navbar";


export default function AppRouter(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/adicionarcurriculo' element={<Formulario />} />
                <Route path='/listacurriculo' element={<ListaCurriculo />} />
                <Route path='/' element={<Inicio />} />
            </Routes>
        </Router>
    )
}

