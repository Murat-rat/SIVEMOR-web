import CustomInput from "../components/CustomInput";
import MainButton from "../components/MainButton";
import logo from "../assets/Logo.png"; 

function Login() {
  return (
    <div className="pantalla-completa">
      
      {/* Lado de los colores (se oculta en pantallas pequeñas) */}
      <div className="lado-decorativo"></div>

      {/* Lado del contenido */}
      <div className="lado-formulario">
        <div className="caja-login">
          
          {/* Logo y Encabezado */}
          <img src={logo} alt="Logo Sivemor" style={{ width: "120px" }} />
          <h1 className="titulo-verde">SIVEMOR</h1>
          <p className="subtitulo-gris">Sistema de Verificación de Morelos</p>

          <h4 style={{ margin: "40px 0 20px 0", fontWeight: "bold" }}>
            Iniciar sesión
          </h4>

          {/* Campos de texto y Botón */}
          <form>
            <CustomInput placeholder="correo@ejemplo.com" />
            <CustomInput type="password" placeholder="............" />
            <MainButton text="Iniciar Sesión" />
          </form>
          
        </div>
      </div>

    </div>
  );
}

export default Login;