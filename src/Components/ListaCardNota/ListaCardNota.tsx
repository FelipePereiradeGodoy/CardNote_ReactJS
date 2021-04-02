import React from 'react';
import CardNota from '../CardNota/CardNota';
import './ListaCardNota.css';


interface ICardNota {
    tituloNota: string,
    conteudoNota: string
}  

interface ListaCardNotaProps {
    list: ICardNota[]
}

const ListaCardNota: React.FC<ListaCardNotaProps> = ({ list, ...rest }) => {
    return(
        <ul className="lista-card-nota-block">
            {list.map((nota, index) => {
                return(
                    <li className="lista-item" key={index}>
                        <CardNota tituloNota={nota.tituloNota} conteudoNota={nota.conteudoNota} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ListaCardNota;