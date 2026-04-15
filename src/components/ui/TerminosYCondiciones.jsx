import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { LOCATIONS } from "@/constants/locations";

// Datos del Colegio Isaac Newton
const COLEGIO_NOMBRE = "Colegio Privado de Ciencias Isaac Newton";
const COLEGIO_DOMINIO = "inewton.edu.pe ";
const COLEGIO_RUC = "20368745546"; 
const COLEGIO_DIRECCION = LOCATIONS.cajamarca.address; 
const COLEGIO_EMAIL = "legal@inewton.edu.pe";
const COLEGIO_TELEFONO = "(076) 280932";

const TerminosYCondiciones = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      
    

      {/* CONTENIDO LEGAL */}
      <section className="py-16 text-justify">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-8 text-gray-700 leading-relaxed">
            
            <p>
              Bienvenido a <strong className="text-azul-oscuro">{COLEGIO_NOMBRE}</strong>. Al acceder y utilizar nuestro sitio web, usted acepta estar sujeto a los siguientes términos y condiciones. Por favor, léalos detenidamente.
            </p>

            {/* 1. Información General */}
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-verde-azulado border-b pb-2">
                1. Información General
              </h2>
              <p>
                El presente sitio web, accesible a través del dominio <strong className="text-azul-oscuro">www.{COLEGIO_DOMINIO}</strong>, es propiedad del {COLEGIO_NOMBRE}, con RUC {COLEGIO_RUC}, y domicilio en {COLEGIO_DIRECCION}.
              </p>
              <p>
                Para cualquier consulta o comunicación, puede contactarnos a través de:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amarillo-dorado flex-shrink-0" />
                  Correo Electrónico: <a href={`mailto:${COLEGIO_EMAIL}`} className="text-verde-azulado hover:underline">{COLEGIO_EMAIL}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amarillo-dorado flex-shrink-0" />
                  Teléfono: <a href={`tel:${COLEGIO_TELEFONO}`} className="text-verde-azulado hover:underline">{COLEGIO_TELEFONO}</a>
                </li>
              </ul>
            </div>

            {/* 2. Objeto */}
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-verde-azulado border-b pb-2">
                2. Objeto
              </h2>
              <p>
                Los presentes Términos y Condiciones regulan el acceso y el uso del sitio web, incluyendo los contenidos y servicios puestos a disposición de los usuarios. La utilización del sitio web implica la plena aceptación de todas las disposiciones incluidas en este documento.
              </p>
            </div>

            {/* 3. Propiedad Intelectual */}
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-verde-azulado border-b pb-2">
                3. Propiedad Intelectual
              </h2>
              <p>
                Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece al {COLEGIO_NOMBRE}, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
              </p>
              <p>
                El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad del {COLEGIO_NOMBRE}.
              </p>
            </div>

            {/* 4. Uso del Sitio Web */}
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-verde-azulado border-b pb-2">
                4. Uso del Sitio Web
              </h2>
              <p>
                El usuario se compromete a utilizar el sitio web, los contenidos y servicios de conformidad con la Ley, el presente Aviso Legal, las buenas costumbres y el orden público. Queda prohibido:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>El uso con fines ilícitos o contrarios a la buena fe.</li>
                <li>Cualquier uso que pueda causar daño a los sistemas del {COLEGIO_NOMBRE} o de terceros.</li>
                <li>La reproducción, copia, distribución o modificación de los contenidos sin autorización expresa.</li>
              </ul>
            </div>

            {/* 5. Exclusión de Garantías y Responsabilidad */}
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-verde-azulado border-b pb-2">
                5. Exclusión de Garantías y Responsabilidad
              </h2>
              <p>
                El {COLEGIO_NOMBRE} no se hace responsable de los daños y perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo de este sistema electrónico.
              </p>
            </div>

            {/* 6. Modificaciones */}
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-verde-azulado border-b pb-2">
                6. Modificaciones
              </h2>
              <p>
                El {COLEGIO_NOMBRE} se reserva el derecho de modificar, en cualquier momento y sin necesidad de previo aviso, la presentación y configuración del sitio web, así como los presentes Términos y Condiciones.
              </p>
            </div>

            {/* 7. Legislación Aplicable y Jurisdicción */}
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-verde-azulado border-b pb-2">
                7. Legislación Aplicable y Jurisdicción
              </h2>
              <p>
                Los presentes Términos y Condiciones se rigen por la legislación peruana. Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación peruana, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de la ciudad de Cajamarca.
              </p>
            </div>

            <p className="pt-6 border-t text-sm text-gray-500">
              © {new Date().getFullYear()} {COLEGIO_NOMBRE}. Todos los derechos reservados.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TerminosYCondiciones;
