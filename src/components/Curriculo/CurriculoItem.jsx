import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export const CurriculoItem = () =>{

    const valores = [],
    keys = Object.keys(localStorage)
    keys.map(key => valores.push(JSON.parse(localStorage.getItem(key))))

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

    const [mostrar, setMostrar] = useState(false)

    const mostrarModal = () => setMostrar(true); 
    const fecharModal = () => setMostrar(false) ;
    
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
                            <span role="button" className="badge bg-success" variant="primary" onClick={mostrarModal}>
                                Visualizar
                            </span>
                                <Modal
                                    open={mostrar}
                                    onClose={fecharModal}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description">
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" className="text-center" variant="h6" component="h2">
                                            Visualizar Currículo:
                                            <hr />
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                                            Nome : {id.nome} <br/>
                                            E-mail: {id.email} <br/>
                                            Telefone: {id.telefone} <br/>
                                            RG: {id.rg} <br/>
                                            Endereço: {id.endereco} <br/>
                                            GitHub: {id.github} <br/>
                                            LinkedIn: {id.linkedin} <br/>
                                            Educação: {id.educacao} <br/>
                                            Cargo: {id.cargo} <br/>
                                            Experiência: {id.experiencia} <br/>
                                            Sobre: {id.sobre} <br/>
                                        </Typography>
                                    </Box>
                                </Modal>
                            <span role="button" className="badge bg-danger" onClick={() => {
                                window.alert('Currículo apagado com sucesso!')
                                keys.map(key => valores.push(JSON.parse(localStorage.removeItem(id.email))))
                                window.location.reload();}}>
                                Apagar
                            </span>
                        </div>
                    </th>
                </tr>    
            })}
        </React.Fragment>
    )
}
