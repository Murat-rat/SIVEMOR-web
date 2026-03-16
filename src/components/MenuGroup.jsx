import '../App.css';

export function MenuGroup({ title, id, children }) {
  const headerId = `heading${id}`;
  const collapseId = `collapse${id}`;

  return (
    <div className="accordion-item border-0 rounded-0">
      <h2 className="accordion-header" id={headerId}>
        <button 
          className="accordion-button shadow-none py-3 px-4 border-bottom border-secondary-subtle rounded-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#${collapseId}`}
          aria-expanded="true" 
          aria-controls={collapseId}
          style={{
            color: 'var(--menu-text-dark)',
            backgroundColor: 'var(--menu-bg-section)',
            fontSize: '14px'
          }}
        >
          {title}
        </button>
      </h2>
      <div 
        id={collapseId} 
        className="accordion-collapse collapse show" 
        aria-labelledby={headerId} 
      >
        <div className="accordion-body p-0">
          {children}
        </div>
      </div>
    </div>
  );
}