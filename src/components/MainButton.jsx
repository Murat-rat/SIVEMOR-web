function MainButton({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="boton-principal" // <--- Esta clase debe coincidir con el CSS
    >
      {text}
    </button>
  );
}
export default MainButton;