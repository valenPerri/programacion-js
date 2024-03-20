// Objeto en JavaScript
const persona = {
    nombre: 'Fernanda',
    edad: 21,
    saludar: function() {
      return '¡Hola! Mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.';
    }
  };
  
  module.exports = persona;