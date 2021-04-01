import React, { FormEvent, useState } from 'react';
import Input from '../Components/Input/Input';
import TextArea from '../Components/TextArea/TextArea';
import ListaCardNota from '../Components/ListaCardNota/ListaCardNota';
import './CardNota_App.css';


function CardNota_App() {
    const [tituloNota, setTituloNota] = useState("");
    const [conteudoNota, setConteudoNota] = useState("");
    const [listCardNotas, setListCardNotas] = useState([{tituloNota: "", conteudoNota: ""}]);
    

    const handleCreateCardNota = (event: FormEvent) => {
        event.preventDefault();
        
        const newNota = {tituloNota, conteudoNota}; 
        const newListNotas = listCardNotas;
        
        newListNotas.push(newNota);

        setListCardNotas(newListNotas);
    }


    return(
        <div className="card-nota-app-block">
            <form onSubmit={handleCreateCardNota} >
                <section>
                    <Input 
                      name="tituloNota" 
                      label="Titulo da Nota" 
                      value={tituloNota}
                      onChange={(e) => { setTituloNota(e.target.value) }}
                    />

                    <TextArea 
                      name="conteudoNota" 
                      value={conteudoNota}
                      onChange={(e) => { setConteudoNota(e.target.value) }}
                    />
                </section>
                
                <ListaCardNota 
                  list={listCardNotas} 
                />
                
                <button type="submit">Criar</button>
            </form>
        </div>
    );
}

export default CardNota_App;