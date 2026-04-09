import {
  GraduationCap,
  Briefcase,
  User
} from 'lucide-react';

export const vacantesData = [
  {
    id: 1,
    tipo: 'docente',
    titulo: 'Convocatoria Docente – Primaria',
    descripcion:
      'Buscamos docente para 1re grado de primaria.',
    requisitos:
      'Titulo profesional en Educación, experiencia mínima de 2 años.',
    fechaCierre: '06 de Febrero de 2026',
    icono: GraduationCap,
    basesUrl: '/bases/docentes-2025'
  },
  {
    id: 2,
    tipo: 'administrativo',
    titulo: 'Coordinador de Logística y Servicios Generales.',
    descripcion:
      'Manejo de Inventarios, Dominio de excel y gestión de proveedores.',
    requisitos:
      'Experiencia minima de 2 años.',
    fechaCierre: '10 de Marzo de 2026',
    icono: Briefcase,
    basesUrl: '/bases/admisiones'
  },
  {
    id: 3,
    tipo: 'servicios',
    titulo: 'Personal de Mantenimiento y Limpieza',
    descripcion:
      'Apoyo en mantenimiento general de instalaciones.',
    requisitos:
      'Secundaria completa, responsabilidad y puntualidad.',
    fechaCierre: '28 de Febrero de 2025',
    icono: User,
    basesUrl: '/bases/mantenimiento'
  }
];
