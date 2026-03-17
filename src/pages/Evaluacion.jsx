import React, { useState, useEffect } from "react";
import imgLlanta from "../assets/Llanta.png";
import imgCamion from "../assets/Camion.png";
import Navbar from "../components/Navbar";
import EvaluationCard from "../components/EvaluationCard";
import CheckOption from "../components/CheckOption";
import InputOption from "../components/InputOption";
import MainButton from "../components/MainButton";
import InputComentario from "../components/InputComentario"; 
import InputEvidencia from "../components/InputEvidencia";
import LogoutButton from "../components/LogoutButton"; // IMPORTACIÓN DEL NUEVO COMPONENTE

function Evaluacion() {
  // --- ESTADOS PARA DATOS Y ARCHIVOS ---
  const [evaluacion, setEvaluacion] = useState({});
  
  // Estado para las URLs visuales (Lo que se muestra en los cuadros grises)
  const [urlsVisuales, setUrlsVisuales] = useState({
    evidencia_1: "",
    evidencia_2: "",
    evidencia_3: ""
  });

  // Estado para los archivos reales (Lo que se envía a Spring Boot)
  const [archivosBinarios, setArchivosBinarios] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvaluacion({ ...evaluacion, [name]: value });
  };

  // Manejador para la selección de imágenes
  const handleEvidenciaChange = (name, file) => {
    const urlPreview = URL.createObjectURL(file);
    setUrlsVisuales(prev => ({ ...prev, [name]: urlPreview }));
    setArchivosBinarios(prev => ({ ...prev, [name]: file }));
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    console.log("Cerrando sesión...");
    // Aquí puedes agregar la lógica para borrar tokens y redireccionar
    window.location.href = "/login";
  };

  const guardarDatos = () => {
    // Preparación para Spring Boot
    const formData = new FormData();
    formData.append("datos", new Blob([JSON.stringify(evaluacion)], { type: "application/json" }));
    
    // Adjuntar archivos si existen
    Object.keys(archivosBinarios).forEach(key => {
      formData.append(key, archivosBinarios[key]);
    });

    console.log("Datos capturados:", evaluacion);
    console.log("Archivos listos para backend:", archivosBinarios);
    alert("¡Evaluación y evidencias preparadas para guardar!");
  };

  return (
    <div className="pagina-completa-sivemor">
      <Navbar /> 

      {/* --- CONTENEDOR PARA EL BOTÓN DE LOGOUT (Superior Derecha) --- */}
      <div className="contenedor-logout-superior">
        <LogoutButton onClick={handleLogout} />
      </div>

      <div className="pagina-evaluacion">
        <h2 className="titulo-seccion-evaluacion">Evaluación</h2>

        {/* --- SECCIÓN 1: LUCES --- */}
        <h4 className="subtitulo-seccion-evaluacion">Luces</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Luces gálibo">
              <CheckOption label="Aprobadas" name="luces_galibo" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierda fundida" name="luces_galibo" value="izq_fundido" onChange={handleInputChange} />
              <CheckOption label="Derecha fundida" name="luces_galibo" value="der_fundido" onChange={handleInputChange} />
              <CheckOption label="Ambas fundidas" name="luces_galibo" value="ambas_fundidas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Luces bajas">
              <CheckOption label="Aprobadas" name="luces_bajas" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierda fundida" name="luces_bajas" value="izq_fundido" onChange={handleInputChange} />
              <CheckOption label="Derecha fundida" name="luces_bajas" value="der_fundido" onChange={handleInputChange} />
              <CheckOption label="Ambas fundidas" name="luces_bajas" value="ambas_fundidas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Luces demarcadoras traseras">
              <CheckOption label="Aprobadas" name="luces_demarc_tras" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierda fundida" name="luces_demarc_tras" value="izq_fundido" onChange={handleInputChange} />
              <CheckOption label="Derecha fundida" name="luces_demarc_tras" value="der_fundido" onChange={handleInputChange} />
              <CheckOption label="Ambas fundidas" name="luces_demarc_tras" value="ambas_fundidas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Luces altas">
              <CheckOption label="Aprobadas" name="luces_altas" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierda fundida" name="luces_altas" value="izq_fundido" onChange={handleInputChange} />
              <CheckOption label="Derecha fundida" name="luces_altas" value="der_fundido" onChange={handleInputChange} />
              <CheckOption label="Ambas fundidas" name="luces_altas" value="ambas_fundidas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Luces demarcadoras delanteras">
              <CheckOption label="Aprobadas" name="luces_demarc_del" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierda fundida" name="luces_demarc_del" value="izq_fundido" onChange={handleInputChange} />
              <CheckOption label="Derecha fundida" name="luces_demarc_del" value="der_fundido" onChange={handleInputChange} />
              <CheckOption label="Ambas fundidas" name="luces_demarc_del" value="ambas_fundidas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Luces indicadoras">
              <CheckOption label="Aprobadas" name="luces_indicadoras" value="ok" onChange={handleInputChange} />
              <CheckOption label="1 fundida" name="luces_indicadoras" value="uno_fundido" onChange={handleInputChange} />
              <CheckOption label="2 fundidas" name="luces_indicadoras" value="dos_fundidas" onChange={handleInputChange} />
              <CheckOption label="3 fundidas" name="luces_indicadoras" value="tres_fundidas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Faro izquierdo">
              <CheckOption label="Aprobado" name="faro_izq" value="ok" onChange={handleInputChange} />
              <CheckOption label="Flojo" name="faro_izq" value="flojo" onChange={handleInputChange} />
              <CheckOption label="Roto" name="faro_izq" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Luces direccionales delanteras">
              <CheckOption label="Aprobadas" name="luces_direccionales_del" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierda fundida" name="luces_direccionales_del" value="izq_fundido" onChange={handleInputChange} />
              <CheckOption label="Derecha fundida" name="luces_direccionales_del" value="der_fundido" onChange={handleInputChange} />
              <CheckOption label="Ambas fundidas" name="luces_direccionales_del" value="ambas_fundidas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Faro derecho">
              <CheckOption label="Aprobado" name="faro_der" value="ok" onChange={handleInputChange} />
              <CheckOption label="Flojo" name="faro_der" value="flojo" onChange={handleInputChange} />
              <CheckOption label="Roto" name="faro_der" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Luces direccionales traseras">
              <CheckOption label="Aprobadas" name="luces_direccionales_tras" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierda fundida" name="luces_direccionales_tras" value="izq_fundido" onChange={handleInputChange} />
              <CheckOption label="Derecha fundida" name="luces_direccionales_tras" value="der_fundido" onChange={handleInputChange} />
              <CheckOption label="Ambas fundidas" name="luces_direccionales_tras" value="ambas_fundidas" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        {/* --- SECCIÓN 2: LLANTAS ESTADO --- */}
        <h4 className="subtitulo-seccion-evaluacion">Llantas</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Llantas rines delanteros">
              <CheckOption label="Aprobadas" name="llantas_rines_del" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierdo roto o soldado" name="llantas_rines_del" value="izq_roto_soldado" onChange={handleInputChange} />
              <CheckOption label="Derecho roto o soldado" name="llantas_rines_del" value="der_roto_soldado" onChange={handleInputChange} />
              <CheckOption label="Ambos rotos o soldados" name="llantas_rines_del" value="ambos_rotos_soldados" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas rines traseros">
              <CheckOption label="Aprobadas" name="llantas_rines_tras" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierdo roto o soldado" name="llantas_rines_tras" value="izq_roto_soldado" onChange={handleInputChange} />
              <CheckOption label="Derecho roto o soldado" name="llantas_rines_tras" value="der_roto_soldado" onChange={handleInputChange} />
              <CheckOption label="Ambos rotos o soldados" name="llantas_rines_tras" value="ambos_rotos_soldados" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas masas delanteras">
              <CheckOption label="Aprobadas" name="llantas_masas_del" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierdo con fuga" name="llantas_masas_del" value="izq_con_fuga" onChange={handleInputChange} />
              <CheckOption label="Derecho con fuga" name="llantas_masas_del" value="der_con_fuga" onChange={handleInputChange} />
              <CheckOption label="Ambos con fuga" name="llantas_masas_del" value="ambos_con_fuga" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas masas traseras">
              <CheckOption label="Aprobadas" name="llantas_masas_tras" value="ok" onChange={handleInputChange} />
              <CheckOption label="Izquierdo con fuga" name="llantas_masas_tras" value="izq_con_fuga" onChange={handleInputChange} />
              <CheckOption label="Derecho con fuga" name="llantas_masas_tras" value="der_con_fuga" onChange={handleInputChange} />
              <CheckOption label="Ambos con fuga" name="llantas_masas_tras" value="ambos_con_fuga" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        {/* --- SECCIÓN 3: PRESIÓN --- */}
        <h4 className="subtitulo-seccion-evaluacion">Presión</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Llantas presion delantera izquierda">
              <InputOption label="Ingresa el valor en PSI" name="presion_del_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas presion delantera derecha">
              <InputOption label="Ingresa el valor en PSI" name="presion_del_der" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas presion trasera izquierda 1">
              <InputOption label="Ingresa el valor en PSI" name="presion_tras_izq1" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas presion trasera izquierda 2">
              <InputOption label="Ingresa el valor en PSI" name="presion_tras_izq2" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas presion trasera derecha 1">
              <InputOption label="Ingresa el valor en PSI" name="presion_tras_der1" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas presion trasera derecha 2">
              <InputOption label="Ingresa el valor en PSI" name="presion_tras_der2" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas profundidad delantera izquierda">
              <InputOption label="Ingresa el valor en mm" name="profundidad_del_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas profundidad delantera derecha">
              <InputOption label="Ingresa el valor en mm" name="profundidad_del_der" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas profundidad trasera izquierda 1">
              <InputOption label="Ingresa el valor en mm" name="profundidad_tras_izq1" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas profundidad trasera izquierda 2">
              <InputOption label="Ingresa el valor en mm" name="profundidad_tras_izq2" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas profundidad trasera derecha 1">
              <InputOption label="Ingresa el valor en mm" name="profundidad_tras_der1" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas profundidad trasera derecha 2">
              <InputOption label="Ingresa el valor en mm" name="profundidad_tras_der2" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        <div className="imagen-referencia-contenedor">
          <img src={imgLlanta} alt="Diagrama de Llantas" className="imagen-referencia" />
        </div>

        {/* --- SECCIÓN 3 (BIRLOS) --- */}
        <h4 className="subtitulo-seccion-evaluacion">Birlos</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Llantas birlos delantera izquierda">
              <CheckOption label="Aprobado" name="llantas_birlos_del_izq" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="llantas_birlos_del_izq" value="faltan" onChange={handleInputChange} />
              <CheckOption label="Roto" name="llantas_birlos_del_izq" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos faltantes delantera izquierda ">
              <InputOption label="Ingresa la cantidad de birlos faltantes:" name="birlos_faltantes_del_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos rotos delantera izquierda ">
              <InputOption label="Ingresa la cantidad de birlos rotos:" name="birlos_rotos_del_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas birlos delantera derecha">
              <CheckOption label="Aprobado" name="llantas_birlos_del_der" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="llantas_birlos_del_der" value="faltan" onChange={handleInputChange} />
              <CheckOption label="Roto" name="llantas_birlos_del_der" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos faltantes delantera derecha">
              <InputOption label="Ingresa la cantidad de birlos faltantes:" name="birlos_faltantes_del_der" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos rotos delantera derecha">
              <InputOption label="Ingresa la cantidad de birlos rotos:" name="birlos_rotos_del_der" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas birlos trasera izquierda">
              <CheckOption label="Aprobado" name="llantas_birlos_tras_izq" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="llantas_birlos_tras_izq" value="faltan" onChange={handleInputChange} />
              <CheckOption label="Roto" name="llantas_birlos_tras_izq" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos faltantes trasera izquierda ">
              <InputOption label="Ingresa la cantidad de birlos faltantes:" name="birlos_faltantes_tras_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos rotos trasera izquierda ">
              <InputOption label="Ingresa la cantidad de birlos rotos:" name="birlos_rotos_tras_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas birlos trasera derecha">
              <CheckOption label="Aprobado" name="llantas_birlos_tras_der" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="llantas_birlos_tras_der" value="faltan" onChange={handleInputChange} />
              <CheckOption label="Roto" name="llantas_birlos_tras_der" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos faltantes trasera derecha ">
              <InputOption label="Ingresa la cantidad de birlos faltantes:" name="birlos_faltantes_tras_der" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Birlos rotos trasera derecha ">
              <InputOption label="Ingresa la cantidad de birlos rotos:" name="birlos_rotos_tras_der" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        <div className="imagen-referencia-contenedor">
          <img src={imgCamion} alt="Diagrama de Camion" className="imagen-referencia" />
        </div>

        {/* --- SECCIÓN 4: TUERCAS --- */}
        <h4 className="subtitulo-seccion-evaluacion">Tuercas</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Llantas tuercas delantera izquierda">
              <CheckOption label="Aprobado" name="llantas_tuercas_del_izq" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="llantas_tuercas_del_izq" value="faltan" onChange={handleInputChange} />
              <CheckOption label="Roto" name="llantas_tuercas_del_izq" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tuercas faltantes delantera izquierda">
              <InputOption label="Ingresa la cantidad de tuercas faltantes:" name="tuercas_faltantes_del_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tuercas rotas delantera izquierda">
              <InputOption label="Ingresa la cantidad de tuercas rotas:" name="tuercas_rotas_del_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas tuercas delantera derecha">
              <CheckOption label="Aprobado" name="llantas_tuercas_del_der" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="llantas_tuercas_del_der" value="faltan" onChange={handleInputChange} />
              <CheckOption label="Roto" name="llantas_tuercas_del_der" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tuercas faltantes delantera derecha ">
              <InputOption label="Ingresa la cantidad de tuercas faltantes:" name="tuercas_faltantes_del_der" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tuercas rotas delantera derecha ">
              <InputOption label="Ingresa la cantidad de tuercas rotas:" name="tuercas_rotas_del_der" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Llantas tuercas trasera izquierda">
              <CheckOption label="Aprobado" name="llantas_tuercas_tras_izq" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="llantas_tuercas_tras_izq" value="faltan" onChange={handleInputChange} />
              <CheckOption label="Roto" name="llantas_tuercas_tras_izq" value="roto" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tuercas faltantes trasera izquierda">
              <InputOption label="Ingresa la cantidad de tuercas faltantes:" name="tuercas_faltantes_tras_izq" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tuercas rotas trasera izquierda">
              <InputOption label="Ingresa la cantidad de tuercas rotas:" name="tuercas_rotas_tras_izq" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        {/* --- SECCIÓN 5: Dirección --- */}
        <h4 className="subtitulo-seccion-evaluacion">Dirección, estructura y accesos</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Brazo pitman">
              <CheckOption label="Aprobado" name="brazo_pitman" value="ok" onChange={handleInputChange} />
              <CheckOption label="Golpeado" name="brazo_pitman" value="golpeado" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Manijas de puertas">
              <CheckOption label="Aprobadas" name="manijas_puertas" value="ok" onChange={handleInputChange} />
              <CheckOption label="1 Rota" name="manijas_puertas" value="1_rota" onChange={handleInputChange} />
              <CheckOption label="2 Rotas" name="manijas_puertas" value="2_rotas" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Chavetas">
              <CheckOption label="Aprobadas" name="chavetas" value="ok" onChange={handleInputChange} />
              <CheckOption label="Faltan" name="chavetas" value="faltan" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="En caso de que hagan falta chavetas">
              <InputOption label="Número de chavetas faltantes" name="chavetas_faltantes" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        {/* --- SECCIÓN 6: Sistema de aire --- */}
        <h4 className="subtitulo-seccion-evaluacion">Sistema de aire / frenos</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Compresor">
              <CheckOption label="Aprobado" name="compresor" value="ok" onChange={handleInputChange} />
              <CheckOption label="No corta" name="compresor" value="no_corta" onChange={handleInputChange} />
              <CheckOption label="Reprobado" name="compresor" value="reprobado" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tanques de aire">
              <CheckOption label="Aprobado" name="tanques_aire" value="ok" onChange={handleInputChange} />
              <CheckOption label="Reprobado" name="tanques_aire" value="reprobado" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tiempo de carga psi">
              <InputOption label="Ingresa el tiempo de carga psi" name="tiempo_carga_psi" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Tiempo de carga tiempo">
              <InputOption label="Ingresa el tiempo de carga en minutos" name="tiempo_carga_tiempo" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        {/* --- SECCIÓN 7: Motor --- */}
        <h4 className="subtitulo-seccion-evaluacion">Motor y emisiones</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Humo">
              <CheckOption label="Aprobado" name="humo" value="ok" onChange={handleInputChange} />
              <CheckOption label="Reprobado" name="humo" value="reprobado" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Gobernado">
              <CheckOption label="Aprobado" name="gobernado" value="ok" onChange={handleInputChange} />
              <CheckOption label="Reprobado" name="gobernado" value="reprobado" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        {/* --- SECCIÓN 8: Otros --- */}
        <h4 className="subtitulo-seccion-evaluacion">Otros</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <EvaluationCard title="Caja dirección">
              <CheckOption label="Aprobado" name="caja_direccion" value="ok" onChange={handleInputChange} />
              <CheckOption label="Fuga" name="caja_direccion" value="fuga" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Deposito aceite ">
              <CheckOption label="Aprobado" name="deposito_aceite" value="ok" onChange={handleInputChange} />
              <CheckOption label="Fuga" name="deposito_aceite" value="fuga" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Parabrisas">
              <CheckOption label="Aprobado" name="parabrisas" value="ok" onChange={handleInputChange} />
              <CheckOption label="Estrellado" name="parabrisas" value="estrellado" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Limpiaparabrisas">
              <CheckOption label="Aprobado" name="limpiaparabrisas" value="ok" onChange={handleInputChange} />
              <CheckOption label="Falta 1 pluma" name="limpiaparabrisas" value="falta_pluma" onChange={handleInputChange} />
              <CheckOption label="Falta 2 plumas" name="limpiaparabrisas" value="falta_2plumas" onChange={handleInputChange} />
              <CheckOption label="No funciona" name="limpiaparabrisas" value="no_funciona" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Huelgo">
              <CheckOption label="Aprobado" name="huelgo" value="ok" onChange={handleInputChange} />
              <CheckOption label="Reprobado" name="huelgo" value="reprobado" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="En caso de ser reprobatorio el huelgo">
              <InputOption label="Ingresa los mm de huelgo" name="huelgo_mm" onChange={handleInputChange} />
            </EvaluationCard>

            <EvaluationCard title="Escape">
              <CheckOption label="Aprobado" name="escape" value="ok" onChange={handleInputChange} />
              <CheckOption label="Roto" name="escape" value="roto" onChange={handleInputChange} />
              <CheckOption label="Faltante" name="escape" value="faltante" onChange={handleInputChange} />
            </EvaluationCard>
          </div>
        </div>

        {/* --- SECCIÓN 9: Evidencias --- */}
        <h4 className="subtitulo-seccion-evaluacion">Evidencias</h4>
        <div className="area-contenido-evaluacion">
          <div className="rejilla-tarjetas">
            <InputEvidencia 
              title="Foto Evidencia 1" 
              name="evidencia_1" 
              imageUrl={urlsVisuales.evidencia_1} 
              onFileSelect={handleEvidenciaChange} 
            />
            <InputEvidencia 
              title="Foto Evidencia 2" 
              name="evidencia_2" 
              imageUrl={urlsVisuales.evidencia_2} 
              onFileSelect={handleEvidenciaChange} 
            />
            <InputEvidencia 
              title="Foto Evidencia 3" 
              name="evidencia_3" 
              imageUrl={urlsVisuales.evidencia_3} 
              onFileSelect={handleEvidenciaChange} 
            />
          </div>

          <InputComentario 
            label="Agregar comentario:" 
            name="comentarios_finales" 
            onChange={handleInputChange} 
            placeholder="Escribe aquí las observaciones generales de la evaluación..."
          />
        </div>

        {/* --- BARRA DE BOTONES FINAL --- */}
        <div className="barra-botones-final">
          <div className="contenedor-boton-accion">
            <button className="boton-cancelar-final">Cancelar</button>
          </div>
          <div className="contenedor-boton-accion" onClick={guardarDatos}>
            <MainButton text="Guardar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Evaluacion;