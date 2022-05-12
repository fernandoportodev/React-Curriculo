import React from "react";
import { useNavigate } from "react-router-dom";

export const CurriculoItem = () =>{

    const navigate = useNavigate()

    const valores = [],
    keys = Object.keys(localStorage)
    keys.map(key => valores.push(JSON.parse(localStorage.getItem(key))))

    return(
        <React.Fragment>
            {valores.map(id => {
                return <tr>
                        
                <th>{id.nome}</th>
                <th>{id.email}</th>
                <th>{id.telefone}</th>
                <th>{id.rg}</th>
                <th>
                    <div className="d-flex gap-3">
                        <span role="button" className="badge bg-success" onClick={() => navigate("/Curriculo")}>
                            Visualizar
                        </span>
                        <span role="button" className="badge bg-danger">
                            Apagar
                        </span>
                    </div>
                </th>
            </tr>
                
            })}

        
        </React.Fragment>
    )
}