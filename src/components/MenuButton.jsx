import '../App.css';

export function MenuButton({ label, active = false, onClick, indent = false }) {
  const baseClasses = `btn w-100 border-0 rounded-0 py-3 px-4 ${indent ? 'text-start' : 'text-center'}`;
  const activeClasses = active ? 'active fw-bold' : '';
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} custom-nav-link border-bottom border-secondary-subtle`}
      style={{ 
        color: 'var(--menu-text-dark)',
        fontSize: '14px',
        backgroundColor: active ? 'var(--menu-bg-active)' : 'var(--menu-bg-item)'
      }}
    >
      {label}
    </button>
  );
}