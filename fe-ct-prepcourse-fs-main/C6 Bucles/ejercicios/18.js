function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    [a, b] = [b, a]; // Intercambia a y b si es necesario
  }
  
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i; // Multiplica todos los números entre a y b
  }
  
  return producto;
}

module.exports = productoEntreNúmeros;