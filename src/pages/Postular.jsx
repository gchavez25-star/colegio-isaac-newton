import { useParams, Navigate } from 'react-router-dom';
import { vacantesData } from '@/data/vacantesData';

export default function Postular() {
  const { id } = useParams();

  const vacante = vacantesData.find(
    v => v.id === Number(id)
  );

  if (!vacante) {
    return <Navigate to="/vacantes" replace />;
  }

  return (
    <section className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl bg-white p-10 rounded-xl shadow-lg">
        <h1 className="font-anton text-4xl mb-4">
          {vacante.titulo}
        </h1>

        <p className="text-gray-600 mb-6">
          {vacante.descripcion}
        </p>

        <p className="text-sm text-gray-500 mb-8">
          Requisitos: {vacante.requisitos}
        </p>

        {/* FORMULARIO (PLACEHOLDER) */}
        <div className="text-center text-gray-500">
          Aquí va el formulario de postulación
        </div>
      </div>
    </section>
  );
}
