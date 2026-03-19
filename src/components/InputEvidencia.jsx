import React, { useRef } from 'react';
import iconoGris from '../assets/image_5.png'; // Tu imagen base gris

function InputEvidencia({ title, imageUrl, name, onFileSelect }) {
  const fileInputRef = useRef(null);

  // Lógica visual: Si hay algo en imageUrl (DB o Preview), úsalo. Si no, el gris.
  const srcFinal = imageUrl || iconoGris;

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Pasamos el archivo al padre para que lo guarde y genere el preview
      onFileSelect(name, file);
    }
  };

  return (
    <div className="tarjeta-blanca contenedor-evidencia-tarjeta">
      {title && <h5 className="encabezado-tarjeta-evidencia">{title}</h5>}
      
      <div className="cuadro-imagen-clickeable" onClick={handleClick}>
        <img 
          src={srcFinal} 
          alt={title} 
          className="imagen-previsualizacion"
          style={{ 
            // Si es la imagen real, que cubra el cuadro. Si es el icono, que se contenga.
            objectFit: imageUrl ? 'cover' : 'contain',
            padding: imageUrl ? '0' : '20px' 
          }} 
        />
        {/* Input oculto */}
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileChange}
          accept="image/*"
        />
        
        <div className="overlay-subir">
          <span>{imageUrl ? "Cambiar Imagen" : "Subir Imagen"}</span>
        </div>
      </div>
    </div>
  );
}

export default InputEvidencia;