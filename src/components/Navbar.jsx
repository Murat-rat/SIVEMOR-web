import logo from "../assets/LogoB.png"; 

function Navbar() {
  return (
    <div className="contenedor-navbar">
      <div className="franja-superior">
        <div className="contenido-franja-superior">
          <img src={logo} alt="Logo SIVEMOR B" className="logo-sivemorB" />
          <div className="textos-encabezado">
            <h1 className="nombre-empresa">SIVEMOR</h1>
            <p className="descripcion-empresa">Sistema de Verificación de Morelos</p>
          </div>
        </div>
      </div>
      <div className="franja-inferior-aqua"></div>
    </div>
  );
}

export default Navbar;



///////////