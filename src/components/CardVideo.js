import React from "react";
    export function CardVideo(props){
    return(
        <div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
                <img src={props.video.imagem} alt=""/>
                <h4>{props.video.titulo}</h4>
            </div>
        </div>
    )
    }