import { useState } from 'react';
import './Tarjeta.css'

const Tarjeta = (props) => {
  
    let estiloTipos = {
        backgroundColor: ""
    };

    let estiloTipos2 = {
        backgroundColor: ""
    };

    let estiloFondo = {
        backgroundColor: ""
    };

    let estiloCirculo = {
        backgroundColor: ""
    };


  switch (props.tipo2) {
    case "grass":
        estiloTipos = {
            backgroundColor: "#37A02E"
        };
        estiloFondo = {
            backgroundColor: "#66D65D"
        };
        estiloCirculo = {
            backgroundColor: "#AEFBA8"
        };
      break;
    case "fire":
        estiloTipos = {
            backgroundColor: "#EA5B1D"
        };
        estiloFondo = {
            backgroundColor: "#FF8855"
        };
        estiloCirculo = {
            backgroundColor: "#FFB595"
        };
      break;
    case "water":
        estiloTipos = {
            backgroundColor: "#29C5FF"
        };
        estiloFondo = {
            backgroundColor: "#73D9FF"
        };
        estiloCirculo = {
            backgroundColor: "#B8ECFF"
        };
      break;
    case "bug":
        estiloTipos = {
            backgroundColor: "#0D4F0D",
            color: "white"
        };
        estiloFondo = {
            backgroundColor: "#538953"
        };
        estiloCirculo = {
            backgroundColor: "#92D292"
        };
      break;
    case "dark":
        estiloTipos = {
            backgroundColor: "#4F514F",
            color: "white"
        };
        estiloFondo = {
            backgroundColor: "#9A9A9A"
        };
        estiloCirculo = {
            backgroundColor: "#BFBFBF"
        };
      break;
    case "dragon":
        estiloTipos = {
            backgroundColor: "#37268A"
        };
        estiloFondo = {
            backgroundColor: "#8779CE"
        };
        estiloCirculo = {
            backgroundColor: "#C9BFF8"
        };
      break;
    case "electric":
        estiloTipos = {
            backgroundColor: "#F7F737",
            color: "black"
        };
        estiloFondo = {
            backgroundColor: "#FAFA85"
        };
        estiloCirculo = {
            backgroundColor: "#FEFECE"
        };
      break;
    case "fairy":
        estiloTipos = {
            backgroundColor: "#E252F9"
        };
        estiloFondo = {
            backgroundColor: "#EC90FA"
        };
        estiloCirculo = {
            backgroundColor: "#F3C5FA"
        };
      break;
    case "fighting":
        estiloTipos = {
            backgroundColor: "#B47826"
        };
        estiloFondo = {
            backgroundColor: "#E2B06C"
        };
        estiloCirculo = {
            backgroundColor: "#F4DCBC"
        };
      break;
    case "flying":
        estiloTipos = {
            backgroundColor: "#BFD3C1",
            color: "black"
        };
        estiloFondo = {
            backgroundColor: "#D7DCD7"
        };
        estiloCirculo = {
            backgroundColor: "#EDF0ED"
        };
      break;
    case "ghost":
        estiloTipos = {
            backgroundColor: "#1E1A40",
            color: "white"
        };
        estiloFondo = {
            backgroundColor: "#544F7D"
        };
        estiloCirculo = {
            backgroundColor: "#9E99CB"
        };
      break;
    case "ground":
        estiloTipos = {
            backgroundColor: "#8C5718"
        };
        estiloFondo = {
            backgroundColor: "#C49965"
        };
        estiloCirculo = {
            backgroundColor: "#EFCDA4"
        };
      break;
    case "ice":
        estiloTipos = {
            backgroundColor: "#46E2E7"
        };
        estiloFondo = {
            backgroundColor: "#95F0F3"
        };
        estiloCirculo = {
            backgroundColor: "#CFFCFE"
        };
      break;
    case "normal":
        estiloTipos = {
            backgroundColor: "#CFBDD8",
            color: "black"
        };
        estiloFondo = {
            backgroundColor: "#E4D9E9"
        };
        estiloCirculo = {
            backgroundColor: "#F2F2F3"
        };
      break;
    case "poison":
        estiloTipos = {
            backgroundColor: "#8C38BC"
        };
        estiloFondo = {
            backgroundColor: "#BF87DF"
        };
        estiloCirculo = {
            backgroundColor: "#E0BCF4"
        };
      break;
    case "psychic":
        estiloTipos = {
            backgroundColor: "#A82198"
        };
        estiloFondo = {
            backgroundColor: "#D373C8"
        };
        estiloCirculo = {
            backgroundColor: "#F2B2EB"
        };
      break;
    case "rock":
        estiloTipos = {
            backgroundColor: "#91764C"
        };
        estiloFondo = {
            backgroundColor: "#D0B894"
        };
        estiloCirculo = {
            backgroundColor: "#F5E5CB"
        };
      break;
    case "steel":
        estiloTipos = {
            backgroundColor: "#4A7F80"
        };
        estiloFondo = {
            backgroundColor: "#7FB5B6"
        };
        estiloCirculo = {
            backgroundColor: "#FB6DFE0"
        };
      break;
    case "No Type":
        estiloTipos = {
            backgroundColor: "#ECECEC",
            color: "black"
        };
        estiloFondo = {
            backgroundColor: "#FAFAFA"
        };
        estiloCirculo = {
            backgroundColor: "#FFFFFF"
        };
      break;
  }

  switch (props.tipo) {
    case "grass":
        estiloTipos2 = {
            backgroundColor: "#37A02E"
        };
      break;
    case "fire":
        estiloTipos2 = {
            backgroundColor: "#EA5B1D"
        };
      break;
    case "water":
        estiloTipos2 = {
            backgroundColor: "#29C5FF"
        };
      break;
    case "bug":
        estiloTipos2 = {
            backgroundColor: "#0D4F0D",
            color: "white"
        };
      break;
    case "dark":
        estiloTipos2 = {
            backgroundColor: "#4F514F",
            color: "white"
        };
      break;
    case "dragon":
        estiloTipos2 = {
            backgroundColor: "#37268A"
        };
      break;
    case "electric":
        estiloTipos2 = {
            backgroundColor: "#F7F737",
            color: "black"
        };
      break;
    case "fairy":
        estiloTipos2 = {
            backgroundColor: "#E252F9"
        };
      break;
    case "fighting":
        estiloTipos2 = {
            backgroundColor: "#B47826"
        };
      break;
    case "flying":
        estiloTipos2 = {
            backgroundColor: "#BFD3C1",
            color: "black"
        };
      break;
    case "ghost":
        estiloTipos2 = {
            backgroundColor: "#1E1A40",
            color: "white"
        };
      break;
    case "ground":
        estiloTipos2 = {
            backgroundColor: "#8C5718"
        };
      break;
    case "ice":
        estiloTipos2 = {
            backgroundColor: "#46E2E7"
        };
      break;
    case "normal":
        estiloTipos2 = {
            backgroundColor: "#CFBDD8",
            color: "black"
        };
      break;
    case "poison":
        estiloTipos2 = {
            backgroundColor: "#8C38BC"
        };
      break;
    case "psychic":
        estiloTipos2 = {
            backgroundColor: "#A82198"
        };
      break;
    case "rock":
        estiloTipos2 = {
            backgroundColor: "#91764C"
        };
      break;
    case "steel":
        estiloTipos2 = {
            backgroundColor: "#4A7F80"
        };
      break;
    case "No Type":
        estiloTipos2 = {
            backgroundColor: "#FFFFFF",
            color: "black"
        };
      break;
  }

  return (
    <div style={estiloFondo} className='contenedor__tarjeta'>
        <div className='contenedor__imagen'>
            <div style={estiloCirculo} className='circulo__interior'></div>
            <img className='pokemon__imagen' src={props.imagen} alt="" />  
        </div>
        <div className='contenedor__info'>
            <p className='pokemon__id'>#{props.id}</p>
            <p className='pokemon__nombre'>{props.nombre}</p>
            <div className='pokemon__tipos'>
                <p style={estiloTipos} className='pokemon__tipo1'>{props.tipo2}</p>
                <p style={estiloTipos2} className='pokemon__tipo2'>{props.tipo}</p>
            </div>
        </div>
    </div>
  )
}

export default Tarjeta