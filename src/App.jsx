import { useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { SivemorLogo } from './components/SivemorLogo';
import { TablaReportes } from './components/TablaReportes'; // Asegúrate de que este archivo exista
import './App.css'; 

function App() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: 'var(--sivemor-bg-light)' }}>
      
      {/* Header */}
      <header>
        <div className="d-flex align-items-center" style={{ backgroundColor: 'var(--sivemor-header-bg)', padding: '15px 30px', color: 'white' }}>
          <SivemorLogo size="60px" />
          <div>
            <h3 className="m-0 fw-bold">SIVEMOR</h3>
            <small style={{ fontSize: '12px' }}>Sistema de Verificación de Morelos</small>
          </div>
        </div>
        <div style={{ height: '10px', backgroundColor: 'var(--sivemor-header-stripe)' }}></div>
      </header>

      {/* Contenedor Principal */}
      <div className="container-fluid flex-grow-1 p-0">
        <div className="row g-0 h-100 justify-content-center mt-4 mb-4">
          <div className="col-11 d-flex shadow-sm rounded overflow-hidden" style={{ backgroundColor: 'white', minHeight: '70vh' }}>
            
            {/* Menú Lateral */}
            <SideMenu 
              filtroActivo={filtroActivo} 
              cambiarFiltro={setFiltroActivo} 
            />
            
            <div className="flex-grow-1 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#8eb09c' }}>
                <h4 className="m-0 fw-bold text-dark">Reportes: {filtroActivo}</h4>
                <div className="input-group" style={{ width: '250px' }}>
                  <span className="input-group-text bg-white border-end-0">🔍</span>
                  <input type="text" className="form-control border-start-0 ps-0 form-control-sm" placeholder="Search..." />
                </div>
              </div>

              {/* AQUÍ ESTÁ LA MAGIA */}
              <div className="p-4 bg-white flex-grow-1">
                 <TablaReportes />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;