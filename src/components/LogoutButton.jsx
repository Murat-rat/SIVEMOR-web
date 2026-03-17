import React from 'react';
import logoutIcon from '../assets/out.png'; // El icono verde que subiste

function LogoutButton({ onClick }) {
  return (
    <button 
      className="boton-logout-reutilizable" 
      onClick={onClick}
      title="Cerrar Sesión"
    >
      <img src={logoutIcon} alt="Cerrar Sesión" className="icono-logout" />
    </button>
  );
}

export default LogoutButton;