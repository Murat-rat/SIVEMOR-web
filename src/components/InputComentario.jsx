import React from 'react';

function InputComentario({ label, name, value, onChange, placeholder }) {
  return (
    <div className="contenedor-comentario-evidencia">
      <label className="label-comentario">
        {label}
      </label>
      <textarea 
        className="input-comentario" 
        name={name}
        value={value}
        placeholder={placeholder || "Escribe aquí tus observaciones..."}
        onChange={onChange}
        rows="2"
      />
    </div>
  );
}

export default InputComentario;


////////////