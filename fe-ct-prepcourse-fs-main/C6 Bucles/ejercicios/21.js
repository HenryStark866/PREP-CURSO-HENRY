function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero <= 0) {
    return false;
  }

  // Mientras el número sea mayor que 1
  while (numero > 1) {
    // Si no es divisible por 2, no es potencia de 2
    if (numero % 2 !== 0) {
      return false;
    }
    // Divide el número por 2
    numero /= 2;
  }

  // Si llegamos aquí, es potencia de 2
  return true;
}

module.exports = esPotenciaDeDos;
