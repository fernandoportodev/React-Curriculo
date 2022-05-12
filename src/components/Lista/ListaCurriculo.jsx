import React from "react";
import { CurriculoItem } from "../Curriculo/CurriculoItem";

export const ListaCurriculo = () => {
    return (
        <div>

        <h1 className="my-5 text-center mt-3">Lista de Currículos</h1>

        <div className="card bg-secondary p-3">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nome: </th>
                    <th>E-mail: </th>
                    <th>Telefone: </th>
                    <th>RG: </th>
                    <th>Ações:</th>
                </tr>

            </thead>
                <tbody>
                    <CurriculoItem />
                </tbody>
        </table>
        </div>
        </div>
    )
}