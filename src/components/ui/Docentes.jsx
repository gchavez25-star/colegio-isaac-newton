import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Mail,
  MapPin,
  GraduationCap,
  X,
  ChevronRight,
  Award,
  Calendar,
  BookOpen,
} from "lucide-react";
import { docentes } from "@/data/docentes/index.js";

// CAJAMARCA - SECUNDARIA
const DOCENTES_PAGE_SIZE = 12;

export default function Docentes() {
  const [busqueda, setBusqueda] = useState("");
  const [sedeFiltro, setSedeFiltro] = useState("Todos");
  const [nivelFiltro, setNivelFiltro] = useState("Todos");
  const [docenteSeleccionado, setDocenteSeleccionado] = useState(null);
  const [visibleCount, setVisibleCount] = useState(DOCENTES_PAGE_SIZE);

  // Filtrado de docentes
  const docentesFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();

    return docentes.filter((d) => {
      const coincideNombre =
        d.nombre.toLowerCase().includes(termino) ||
        d.area.toLowerCase().includes(termino) ||
        d.correo.toLowerCase().includes(termino);
      const coincideSede = sedeFiltro === "Todos" || d.sede === sedeFiltro;
      const coincideNivel = nivelFiltro === "Todos" || d.nivel === nivelFiltro;

      return coincideNombre && coincideSede && coincideNivel;
    });
  }, [busqueda, sedeFiltro, nivelFiltro]);

  // Contador de docentes por categoría
  const contadores = useMemo(
    () => ({
      total: docentes.length,
      cajamarca: docentes.filter((d) => d.sede === "Cajamarca").length,
      banosDelInca: docentes.filter((d) => d.sede === "Los Baños del Inca")
        .length,
      primaria: docentes.filter((d) => d.nivel === "Primaria").length,
      secundaria: docentes.filter((d) => d.nivel === "Secundaria").length,
    }),
    [],
  );

  const docentesVisibles = docentesFiltrados.slice(0, visibleCount);
  const hayMasDocentes = visibleCount < docentesFiltrados.length;

  useEffect(() => {
    setVisibleCount(DOCENTES_PAGE_SIZE);
  }, [busqueda, sedeFiltro, nivelFiltro]);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="py-6 bg-gradient-to-br from-azul-oscuro to-verde-azulado text-[#013055] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#013055] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amarillo-dorado rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <GraduationCap className="w-20 h-20 mx-auto mb-6 text-amarillo-dorado" />
            <h1 className="font-anton text-5xl md:text-7xl mb-6">
              Nuestro Equipo Docente
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Conoce a los profesionales comprometidos con la excelencia
              educativa y el desarrollo integral de nuestros estudiantes
            </p>
          </motion.div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">
                {contadores.total}
              </div>
              <div className="text-sm">Docentes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">
                {contadores.cajamarca}
              </div>
              <div className="text-sm">Cajamarca</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">
                {contadores.banosDelInca}
              </div>
              <div className="text-sm">Los Baños del Inca</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-amarillo-dorado">2</div>
              <div className="text-sm">Campus</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE FILTROS Y BÚSQUEDA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* BUSCADOR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Buscar por nombre, área o correo..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-verde-azulado focus:outline-none text-lg transition-all shadow-lg"
              />
              {busqueda && (
                <button
                  onClick={() => setBusqueda("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* FILTROS POR SEDE */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold text-azul-oscuro mb-4 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Filtrar por Campus
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Todos", "Cajamarca", "Los Baños del Inca"].map((sede) => (
                <button
                  key={sede}
                  onClick={() => {
                    setSedeFiltro(sede);
                    setNivelFiltro("Todos"); // Reset nivel al cambiar sede
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg ${
                    sedeFiltro === sede
                      ? "bg-amarillo-dorado text-azul-oscuro scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {sede}
                  {sede !== "Todos" && (
                    <span className="ml-2 text-sm opacity-75">
                      ({docentes.filter((d) => d.sede === sede).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* FILTROS POR NIVEL (aparece cuando se selecciona una sede específica) */}
          <AnimatePresence>
            {sedeFiltro !== "Todos" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <h3 className="text-center text-lg font-semibold text-azul-oscuro mb-4 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Filtrar por Nivel Educativo
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {["Todos", "Primaria", "Secundaria"].map((nivel) => (
                    <button
                      key={nivel}
                      onClick={() => setNivelFiltro(nivel)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg ${
                        nivelFiltro === nivel
                          ? "bg-verde-azulado text-white scale-105"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {nivel}
                      {nivel !== "Todos" && sedeFiltro !== "Todos" && (
                        <span className="ml-2 text-sm opacity-75">
                          (
                          {
                            docentes.filter(
                              (d) => d.sede === sedeFiltro && d.nivel === nivel,
                            ).length
                          }
                          )
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONTADOR DE RESULTADOS */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">
              Mostrando{" "}
              <span className="font-bold text-verde-azulado">
                {docentesVisibles.length}
              </span>{" "}
              de{" "}
              <span className="font-bold text-verde-azulado">
                {docentesFiltrados.length}
              </span>{" "}
              docente{docentesFiltrados.length !== 1 ? "s" : ""}
              {busqueda && ` para "${busqueda}"`}
            </p>
          </div>
        </div>
      </section>

      {/* GRID DE DOCENTES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {docentesVisibles.map((docente) => (
                <motion.div
                  key={docente.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
                >
                  {/* Imagen */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                    <img
                      src={docente.imagen}
                      alt={docente.nombre}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#013055]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                          docente.nivel === "Primaria"
                            ? "bg-amber-500"
                            : "bg-indigo-500"
                        }`}
                      >
                        {docente.nivel}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                        {docente.area}
                      </p>
                      <h3 className="text-2xl font-anton leading-tight">
                        {docente.nombre}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <MapPin className="w-4 h-4 text-[#007a75]" />
                      </div>
                      <span className="text-sm font-medium">
                        Campus {docente.sede}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Mail className="w-4 h-4 text-[#007a75]" />
                      </div>
                      <span className="text-sm font-medium truncate">
                        {docente.correo}
                      </span>
                    </div>

                    <button
                      onClick={() => setDocenteSeleccionado(docente)}
                      className="w-full py-3 bg-gray-50 hover:bg-[#013055] text-[#013055] hover:text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      Ver Perfil Completo
                      <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {hayMasDocentes && (
            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((count) => count + DOCENTES_PAGE_SIZE)
                }
                className="inline-flex items-center justify-center px-8 py-4 bg-[#013055] text-white rounded-2xl font-bold hover:bg-[#013055]/90 transition-all shadow-lg"
              >
                Ver más docentes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* MODAL DE DETALLE */}
      <AnimatePresence>
        {docenteSeleccionado && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDocenteSeleccionado(null)}
              className="absolute inset-0 bg-[#013055]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setDocenteSeleccionado(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white md:text-gray-400 md:hover:text-red-500 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Imagen Lateral (Vertical) */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-200">
                <img
                  src={docenteSeleccionado.imagen}
                  alt={docenteSeleccionado.nombre}
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#013055] via-transparent to-transparent opacity-40" />
              </div>

              {/* Contenido del Perfil */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <div className="space-y-8">
                  {/* Header Perfil */}
                  <div>
                    <span className="px-4 py-1 bg-[#007a75]/10 text-[#007a75] rounded-full text-xs font-bold uppercase tracking-widest mb-3 inline-block">
                      {docenteSeleccionado.area}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-anton text-[#013055] leading-tight">
                      {docenteSeleccionado.nombre}
                    </h2>
                    <p className="text-xl text-gray-500 font-medium mt-2">
                      {docenteSeleccionado.cargo}
                    </p>
                  </div>

                  {/* Frase Inspiradora */}
                  <div className="bg-gray-50 p-6 rounded-3xl border-l-4 border-[#fccc00] italic text-gray-600 text-lg">
                    "{docenteSeleccionado.frase}"
                  </div>

                  {/* Grid de Información */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#013055]/5 rounded-2xl">
                        <Award className="w-6 h-6 text-[#013055]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Experiencia
                        </p>
                        <p className="font-bold text-gray-700">
                          {docenteSeleccionado.experiencia}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#013055]/5 rounded-2xl">
                        <BookOpen className="w-6 h-6 text-[#013055]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Especialidad
                        </p>
                        <p className="font-bold text-gray-700">
                          {docenteSeleccionado.especialidad}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#013055]/5 rounded-2xl">
                        <MapPin className="w-6 h-6 text-[#013055]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Campus
                        </p>
                        <p className="font-bold text-gray-700">
                          {docenteSeleccionado.sede}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#013055]/5 rounded-2xl">
                        <Calendar className="w-6 h-6 text-[#013055]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Nivel
                        </p>
                        <p className="font-bold text-gray-700">
                          {docenteSeleccionado.nivel}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contacto */}
                  <div className="pt-6 border-t border-gray-100">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${docenteSeleccionado.correo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#013055] text-white rounded-2xl font-bold hover:bg-[#013055]/90 transition-all shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Enviar Correo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
