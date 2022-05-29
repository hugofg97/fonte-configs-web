function dec2hex(numero) {
    var base = 16;
    var digito = new Array();
    var i = 0;

    while (numero != 0) {
      i++;
      digito[i] = numero % base;
      numero = Math.floor(numero / base);
    }
    value = "";
    while (i >= 1)  {
      switch (digito[i]) {
        case 10: { value += "A"; break }
        case 11: { value += "B"; break }
        case 12: { value += "C"; break }
        case 13: { value += "D"; break }
        case 14: { value += "E"; break }
        case 15: { value += "F"; break }
        default: { value += digito[i]; break }
      }
      i--;
    }
    return value;
  }
let min = 32;
let max = 126;

let caracter = min + Math.floor((Math.random() * (max - min)));  // 32 a 126
for (i = 1; i <= 10; i++) {
    caracter = min + Math.floor((Math.random() * (max - min)));  // 32 a 126
    caracter = "%" + dec2hex(caracter);
    caracter = unescape(caracter);
  
    console.log(caracter)
  }

