import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { vacantesData } from "@/data/vacantesData";

export default function Postular() {
  const { id } = useParams();
  const vacante = vacantesData.find((v) => v.id === Number(id));

  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  if (!vacante) return <Navigate to="/vacantes" replace />;

  // Convertir archivo a Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const cv = form.cv.files[0];

    // ===== VALIDACIONES =====
    if (!cv) return setError("Debe adjuntar su CV.");
    if (cv.size > 5 * 1024 * 1024)
      return setError("El CV no debe superar los 5 MB.");

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(cv.type))
      return setError("Formato de CV no permitido.");

    if (!/\S+@\S+\.\S+/.test(form.email.value))
      return setError("Correo electrónico no válido.");

    if (form.dni.value.length < 8) return setError("DNI no válido.");

    setLoading(true);

    try {
      const base64CV = await toBase64(cv);

      const formData = new FormData(form);
      formData.append("vacante", vacante.titulo);
      formData.append("archivoBase64", base64CV);
      formData.append("archivoNombre", cv.name);
      formData.append("archivoTipo", cv.type);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyWVOE_izcb_pFcuWNiwvXVnjxQXYkJS7whVcx8JCBkhXPyRfYsIZi42LnIatjaaVDN/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        setEnviado(true);
        form.reset();
        setCvFile(null);
      } else {
        setError(data.message || "Error al enviar la postulación.");
      }
    } catch {
      setError("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl bg-white p-10 rounded-xl shadow-lg">
        <h1 className="font-anton text-4xl mb-4 text-[#013055]">
          {vacante.titulo}
        </h1>

        <p className="text-gray-600 mb-6">{vacante.descripcion}</p>

        <p className="text-sm text-gray-500 mb-8">
          Requisitos: {vacante.requisitos}
        </p>

        {enviado ? (
          <div className="text-green-600 text-center font-semibold">
            Postulación enviada correctamente.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              name="campus"
              required
              className="w-full border p-3 rounded"
            >
              <option value="">Seleccione campus</option>
              <option value="Central">Cajamarca</option>
              <option value="Baños del Inca">Los Baños del Inca</option>
            </select>

            <input
              name="nombre"
              required
              placeholder="Nombre completo"
              className="w-full border p-3 rounded"
            />

            <input
              name="dni"
              required
              placeholder="DNI"
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              className="w-full border p-3 rounded"
            />

            <input
              name="telefono"
              required
              placeholder="Teléfono"
              className="w-full border p-3 rounded"
            />

            {/* CV */}
            <div>
              <input
                id="cv"
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setCvFile(e.target.files[0])}
              />

              <label
                htmlFor="cv"
                className="inline-block bg-[#013055] text-white px-6 py-3 rounded cursor-pointer"
              >
                Subir tu CV
              </label>

              {cvFile && (
                <p className="text-sm mt-2">
                  Archivo: <strong>{cvFile.name}</strong>
                </p>
              )}
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              disabled={loading}
              className="w-full bg-[#013055] text-white py-3 rounded"
            >
              {loading ? "Enviando..." : "Postular"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
