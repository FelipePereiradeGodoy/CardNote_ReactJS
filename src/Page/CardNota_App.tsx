import React, { FormEvent, useCallback, useState } from 'react';
import Input from '../Components/Input/Input';
import TextArea from '../Components/TextArea/TextArea';
import ListaCardNota from '../Components/ListaCardNota/ListaCardNota';
import './CardNota_App.css';

interface ICardNota {
  tituloNota: string,
  conteudoNota: string
}


function CardNota_App() {
    const [tituloNota, setTituloNota] = useState("");
    const [conteudoNota, setConteudoNota] = useState("");
    const [listCardNotas, setListCardNotas] = useState<ICardNota[]>([]);
    
    const addCardNota = () => {
        const newListNota = listCardNotas.slice();
        newListNota.push({tituloNota, conteudoNota});
        setListCardNotas(newListNota);
    }

    const handleCreateCardNota = (event: FormEvent) => {
        event.preventDefault();
        
        addCardNota();
    } 


    return(
        <div className="card-nota-app-block">
            <form onSubmit={handleCreateCardNota} >
                <section>
                  <Input 
                      name="tituloNota" 
                      label="Titulo da Nota" 
                      onChange={(e) => {  setTituloNota(e.target.value) }}
                  />

                  <TextArea 
                      name="conteudoNota" 
                      onChange={(e) => { setConteudoNota(e.target.value) }}         
                  />
                    
                  <button type="submit">Criar</button>  
                </section>
            </form>
            <ListaCardNota 
              list={listCardNotas} 
            />
        </div>
    );
}

export default CardNota_App;