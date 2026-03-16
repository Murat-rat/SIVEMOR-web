function CustomInput({ type = "text", placeholder, value, onChange }) {
  return (
    <div className="bloque-input">
      <input
        type={type}
        className="entrada-texto" // <--- Esta clase debe coincidir con el CSS
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default CustomInput;