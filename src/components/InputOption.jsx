const InputOption = ({ label, name, onChange, placeholder = "Ingresa la cantidad" }) => {
  return (
    <div className="fila-opcion-input">
      <p className="texto-label-input">{label}</p>
      <input 
        type="number" 
        name={name} 
        placeholder={placeholder}
        onChange={onChange}
        className="input-numero-sivemor"
      />
    </div>
  );
};

export default InputOption;