import {
  GraduationCap,
  Briefcase,
  User
} from 'lucide-react';

export const vacantesData = [
  {
    id: 1,
    tipo: 'docente',
    titulo: 'Convocatoria Docentes 2026 – Secundaria',
    descripcion:
      'Buscamos docentes para Matemática, Comunicación y Ciencias Sociales.',
    requisitos:
      'Licenciado en Educación, experiencia mínima de 2 años.',
    fechaCierre: '30 de Enero de 2025',
    icono: GraduationCap,
    basesUrl: '/bases/docentes-2025'
  },
  {
    id: 2,
    tipo: 'administrativo',
    titulo: 'Asistente de Admisiones y Marketing',
    descripcion:
      'Gestión de admisiones, atención a padres y apoyo en campañas.',
    requisitos:
      'Experiencia en atención al cliente y redes sociales.',
    fechaCierre: '15 de Febrero de 2025',
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
