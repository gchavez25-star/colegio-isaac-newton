import { Mail, Calendar, ExternalLink, Folder } from "lucide-react"; // Importar el icono Folder

const AccesosRapidos = () => {
  const accesos = [
    {
      nombre: "Correo",
      icono: <Mail size={48} />,
      link: "https://mail.google.com/a/inewton.edu.pe",
      descripcion: "Accede a tu correo institucional",
      external: true,
    },
    {
      nombre: "SIEWEB",
      icono: <ExternalLink size={48} />,
      link: "https://in.sieweb.com.pe/sistema/login",
      descripcion: "Sistema de información educativa",
      external: true,
    },
    {
      nombre: "Calendario",
      icono: <Calendar size={48} />,
      link: "/Docs/CALENDARIO 2026.pdf",
      descripcion: "Consulta el calendario académico",
      external: true,
    },
    {
      nombre: "Google Drive",
      icono: <Folder size={48} />,
      link: "https://drive.google.com/a/inewton.edu.pe",
      descripcion: "Acceso a documentos y recursos compartidos",
      external: true,
    },
  ];

  return (
    <section className="relative -mt-20 z-20 pb-12">
      {/* Contenedor con padding lateral */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {accesos.map((acceso, index) => (
            <a
              key={index}
              href={acceso.link}
              target={acceso.external ? "_blank" : "_self"}
              rel={acceso.external ? "noopener noreferrer" : undefined}
              className="
                bg-white
                p-8 md:p-10
                min-h-[220px]
                rounded-3xl
                flex flex-col items-center justify-center text-center
                cursor-pointer
                transition-all duration-300
                shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                hover:-translate-y-2
                border border-gray-100
                group
                animate-[headerSubmenu_400ms_ease-out]
              "
            >
              {/* Icono */}
              <div
                className="mb-6 text-[#013055] group-hover:text-[#ffcd00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]"
              >
                {acceso.icono}
              </div>

              {/* Título */}
              <h3 className="font-anton text-2xl md:text-3xl text-[#013055] tracking-wide mb-3 uppercase">
                {acceso.nombre}
              </h3>

              {/* Descripción */}
              <p className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed">
                {acceso.descripcion}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccesosRapidos;
