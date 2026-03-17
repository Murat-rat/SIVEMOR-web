function EvaluationCard({ title, children }) {
  return (
    <div className="tarjeta-blanca">
      <h5 className="titulo-tarjeta">{title}</h5>
      <div className="contenido-tarjeta">
        {children}
      </div>
    </div>
  );
}

export default EvaluationCard;