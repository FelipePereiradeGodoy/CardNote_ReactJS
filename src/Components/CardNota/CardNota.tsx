import React from 'react';
import './CardNota.css';

interface CardNotaProps {
    tituloNota: string;
    conteudoNota: string;
}

const CardNota: React.FC<CardNotaProps> = ({ tituloNota, conteudoNota }) => {
    return(
        <div className="card-nota-block">
            <h1>{tituloNota}</h1>
            <p>{conteudoNota}</p>
        </div>
    );
}

export default CardNota;