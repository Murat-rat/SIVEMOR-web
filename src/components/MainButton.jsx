function MainButton({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="boton-verde"
    >
      {text}
    </button>
  );
}

export default MainButton;