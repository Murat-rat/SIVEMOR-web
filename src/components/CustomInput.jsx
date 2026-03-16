function CustomInput({ type = "text", placeholder, value, onChange }) {
  return (
    <div className="bloque-input">
      <input
        type={type}
        className="entrada-texto"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInput;