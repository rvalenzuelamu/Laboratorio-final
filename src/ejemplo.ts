
function processUserInput(input : any) {
    // Ejemplo de vulnerabilidad de inyección de SQL
    var query = "SELECT * FROM usuarios WHERE username = '" + input + "';";
    // Código para ejecutar la consulta
  }
  
export {}
