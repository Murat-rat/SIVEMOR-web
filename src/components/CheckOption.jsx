function CheckOption({ label, name, value, onChange, checked }) {
  return (
    <div className="fila-opcion">
      <label className="texto-opcion-envolvente">
        <input 
          type="radio" 
          name={name} 
          value={value} 
          checked={checked}
          onChange={onChange}
          className="selector-check"
        />
        <span className="texto-label">{label}</span>
      </label>
    </div>
  );
}

export default CheckOption;