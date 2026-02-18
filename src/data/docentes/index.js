import { docentesCajamarca } from "./cajamarca";
import { docentesBanosDelInca } from "./banosdelinca";

// Unificamos toda la data
export const docentes = [...docentesCajamarca, ...docentesBanosDelInca];
