// Función para verificar si un número es positivo o negativo
function verificarNumero(numero) {
    // Condicional para verificar si el número es positivo o negativo
    if (numero > 0) {
      alert("El número es positivo.");
    } else if (numero < 0) {
      alert("El número es negativo.");
    } else {
      alert("El número es cero.");
    }
  
    let conteo = "Contando hasta el número ingresado:\n";
    for (let i = 1; i <= Math.abs(numero); i++) {
      conteo += i + "\n";
    }
    alert(conteo);
  }
  
  // Ejemplo de uso
  const numeroIngresado = parseInt(prompt("Ingresa un número:"));
  verificarNumero(numeroIngresado);
  