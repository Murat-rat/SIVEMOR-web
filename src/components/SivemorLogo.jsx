import React from 'react';
// 1. IMPORTAMOS LA IMAGEN AQUÍ
// Asegúrate de que los '../' apunten correctamente a tu carpeta assets
import logoImg from '../assets/logo-sivemor.png'; 

export function SivemorLogo({ size = '60px' }) {
  return (
    <div className="d-flex align-items-center justify-content-center me-3" 
         style={{ width: size, height: size }}>
      {/* 2. USAMOS LA VARIABLE importada en el src */}
      <img 
        src={logoImg} 
        alt="SIVEMOR Logo" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
      />
    </div>
  );
}