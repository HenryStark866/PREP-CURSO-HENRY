function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  // Arreglo con los días de la semana
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  
  // Verifica si el número está en el rango correcto
  if (numero >= 1 && numero <= 7) {
    return dias[numero - 1]; // Restamos 1 para acceder al índice correcto
  } else {
    return "No es un dia de la semana";
  }
}

module.exports = obtenerDiaSemana;