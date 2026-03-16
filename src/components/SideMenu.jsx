import { MenuButton } from './MenuButton';
import { MenuGroup } from './MenuGroup';
import '../App.css';

// Ahora recibimos 'filtroActivo' y la función 'cambiarFiltro' desde App.jsx
export function SideMenu({ filtroActivo, cambiarFiltro }) {
  return (
    <div className="d-flex flex-column h-100" 
         style={{ width: '260px', backgroundColor: 'var(--menu-bg-main)' }}>
      
      <div style={{ height: '60px', backgroundColor: 'var(--menu-bg-main)' }}></div>

      <div className="accordion accordion-flush" id="mainMenuAccordion">
        
        <MenuGroup title="Vehículos" id="Vehiculos">
          <MenuButton 
            label="Todos" 
            active={filtroActivo === 'Todos'} 
            onClick={() => cambiarFiltro('Todos')} 
            indent={true} 
          />
          <MenuButton 
            label="Aprobados" 
            active={filtroActivo === 'Aprobados'} 
            onClick={() => cambiarFiltro('Aprobados')} 
            indent={true} 
          />
          <MenuButton 
            label="Pendientes" 
            active={filtroActivo === 'Pendientes'} 
            onClick={() => cambiarFiltro('Pendientes')} 
            indent={true} 
          />
          <MenuButton 
            label="Rechazados" 
            active={filtroActivo === 'Rechazados'} 
            onClick={() => cambiarFiltro('Rechazados')} 
            indent={true} 
          />
          {/* Pedidos no filtra la tabla por ahora, pero lo dejamos visualmente */}
          <MenuButton 
            label="Pedidos" 
            active={filtroActivo === 'Pedidos'} 
            onClick={() => cambiarFiltro('Pedidos')} 
            indent={true} 
          />
        </MenuGroup>

        <MenuGroup title="Usuarios" id="Usuarios">
          <MenuButton label="Clientes" indent={false} />
          <MenuButton label="CEDIS" indent={false} />
          <MenuButton label="Verificentros" indent={false} />
        </MenuGroup>

      </div>
    </div>
  );
}