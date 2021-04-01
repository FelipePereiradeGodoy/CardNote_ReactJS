import React, { LiHTMLAttributes } from 'react';
import CardNota from '../CardNota/CardNota';
import './ListaCardNota.css';

interface ListaCardNotaProps extends LiHTMLAttributes<HTMLLIElement> {
    list: [{tituloNota: string, conteudoNota: string}]
}

const ListaCardNota: React.FC<ListaCardNotaProps> = ({ list }) => {
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