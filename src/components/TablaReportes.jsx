import React from 'react';

export function TablaReportes() {
  // Vamos a forzar a que siempre dibuje 8 filas vacías, sin importar nada más.
  const filasVacias = 8;

  return (
    <table className="table align-middle border-top">
      <thead>
        <tr className="text-muted">
          <th className="fw-normal border-bottom-2 pb-3">Placas</th>
          <th className="fw-normal border-bottom-2 pb-3">Serie</th>
          <th className="fw-normal border-bottom-2 pb-3">CEDIS</th>
          <th className="fw-normal border-bottom-2 pb-3">Región</th>
          <th className="fw-normal border-bottom-2 pb-3">Estado</th>
          <th className="border-bottom-2"></th>
        </tr>
      </thead>
      <tbody>
        
        {/* Dibujamos un ciclo que solo crea filas vacías con bordes obligatorios */}
        {[...Array(filasVacias)].map((_, index) => (
          <tr key={`fila-vacia-${index}`} style={{ height: '65px' }}>
            <td style={{ borderBottom: '1px solid #dee2e6' }}>&nbsp;</td>
            <td style={{ borderBottom: '1px solid #dee2e6' }}>&nbsp;</td>
            <td style={{ borderBottom: '1px solid #dee2e6' }}>&nbsp;</td>
            <td style={{ borderBottom: '1px solid #dee2e6' }}>&nbsp;</td>
            <td style={{ borderBottom: '1px solid #dee2e6' }}>&nbsp;</td>
            <td style={{ borderBottom: '1px solid #dee2e6' }}>&nbsp;</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
}