import React, { useEffect } from "react";
import sticker from "../../../assets/home/sticker.png";
import portada from "../../../assets/home/mobilePortada.jpg";
import "./styles.scss";

const TRPortada = () => {
  
  useEffect(()=>{
    console.log(portada);
  }, [portada])
  return (
    <div className="portada_container">
      <div className="lotes_container">
        <img className="lotes" src={sticker} />
      </div>
      <div className="video_container">
        <img className="gif_portada" src={portada} />
      </div>
    </div>
  );
};

export default TRPortada;
