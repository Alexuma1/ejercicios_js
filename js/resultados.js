// importando los datos de los problemas para su resolucion

import { valores } from "./problemas.js";

// constantes que comprueban si los datos ingresados son del tipo correcto:

// los datos ingresados son del tipo texto:
// const esTexto = (texto = "") => {
//     if (typeof texto != "string")return console.error('No es un texto, por favor ingresa un texto');
//     if (!texto)return console.warn('El texto esta vacio');
// }

// Comprobaciones numeros:
// const comprobacionNumero = (valor1 = undefined) =>{
// if (typeof valor1 != 'number') return console.warn(`No ingresaste un numero: ${valor1} , ingresa un numero`)
// if (valor1 === 0) return console.error(`Ingresaste un numero: ${valor1} igual a 0, ingresa un numero mayor`)
// if (Math.sign(valor1)===-1)return console.error(`Ingresaste un numero: ${valor1} nagativo, ingresa un numero positivo`)
// }

// const DobleComprobacionNumero = (valor1 = undefined , valor2 = undefined) =>{
//     if (typeof valor1 != 'number') return console.warn(`No ingresaste un numero: ${valor1} , ingresa un numero`)
//     if (valor1 === 0) return console.error(`Ingresaste un numero: ${valor1} igual a 0, ingresa un numero mayor`)
//     if (Math.sign(valor1)===-1)return console.error(`Ingresaste un numero: ${valor1} nagativo, ingresa un numero positivo`)
//     if (typeof valor2 != 'number') return console.warn(`No ingresaste un numero: ${valor2} , ingresa un numero`)
//     if (valor2 === 0) return console.error(`Ingresaste un numero: ${valor2} igual a 0, ingresa un numero mayor`)
//     if (Math.sign(valor2)===-1)return console.error(`Ingresaste un numero: ${valor2} nagativo, ingresa un numero positivo`)
// }

// realizando las funciones pedidas en los problemas

const miFuncion01 = (texto = "") =>
  typeof texto != "string"
    ? console.error("No es un texto, por favor ingresa un texto")
    : !texto
    ? console.warn("El texto esta vacio")
    : console.info(
        `El texto ingresado es: ${texto} y tiene: ${texto.length} caracteres`
      );

const miFuncion02 = (texto = "", numero = undefined) => {
  if (typeof texto != "string")
    console.warn("No es un texto, por favor ingresa un texto");
  if (!texto) console.error("El texto esta vacio");
  if (typeof numero != "number")
    console.warn("No es un numero, por favor ingresa un numero");
  if (numero === 0) console.error("Ingresa un numero mayor a 0");
  if (Math.sign(numero) === -1)
    console.error("Ingresaste un numero negativo, ingresa un numero positivo");
  console.info(
    `El texto a cortar es: ${texto} y la cantidad cortada es: ${numero} y quedaria asi: ${texto.slice(
      0,
      numero
    )}`
  );
};

const miFuncion03 = (texto = "", separador = "") => {
  if (typeof texto != "string" || typeof separador != "string")
    console.warn("No es un texto, por favor ingresa un texto");
  if (!texto) console.error("El texto esta vacio");
  if (separador != " ")
    console.warn('Ingresa el separador valido para esta operacion, " "');
  console.info(
    `El texto a devolver en array es: ${texto} y el separador es: ${separador} y quedaria asi: ${texto.split(
      separador
    )}`
  );
};

const miFuncion04 = (texto = "", numero = undefined) => {
  if (typeof texto != "string")
    console.warn("No es un texto, por favor ingresa un texto");
  if (!texto) console.error("El texto esta vacio");
  if (typeof numero != "number")
    console.warn("No es un numero, por favor ingresa un numero");
  if (numero === 0) console.error("Ingresa un numero mayor a 0");
  if (Math.sign(numero) === -1)
    console.error("Ingresaste un numero negativo, ingresa un numero positivo");
  for (let i = 1; i <= numero; i++) {
    console.info(`El texto ingresado es: ${texto} y se repitio: ${i} veces`);
  }
};

const miFuncion05 = (texto = "") =>
  typeof texto != "string"
    ? console.error("No es un texto, por favor ingresa un texto")
    : !texto
    ? console.warn("El texto esta vacio")
    : console.info(
        `El texto ingresado es: ${texto} y su inversion es: ${texto
          .split("")
          .reverse()
          .join("")}`
      );

const miFuncion06 = (texto = "", palabraRepetida = "", separador = "") => {
  if (
    typeof texto != "string" ||
    typeof palabraRepetida != "string" ||
    typeof separador != "string"
  )
    console.error("No son textos, por favor ingresa solo textos");
  if (!texto || !palabraRepetida)
    console.warn("El texto esta vacio, debes ingresar textos");
  if (separador != " ")
    console.warn('Ingresa el separador valido para esta operacion, " "');
  const palabrasAContar = texto.split(separador),
    palabrasRepetida = palabraRepetida.split(separador);
  let r = 0;
  for (let i = 0; i <= palabrasAContar.length; i++) {
    if (palabrasAContar[i] === palabrasRepetida[0]) {
      r++;
      console.log(`El numero de repeticiones fueron: ${r}`);
    }
  }
};

const miFuncion07 = (texto = "", boolean = false, separador = "") => {
  if (typeof texto != "string" || typeof separador != "string")
    console.error("No es un texto, por favor ingresa un texto");
  if (typeof boolean != "boolean")
    console.warn("debes ingresar un tipo de dato booleano");
  if (!texto) console.warn("El texto esta vacio");
  if (separador != " ")
    console.warn('Ingresa el separador valido para esta operacion, " "');
  texto = texto.toLowerCase();
  const invertirTexto = texto.split("").reverse().join("");
  const textoSinInvertir = texto.split(separador);
  const textoInvertido = invertirTexto.split(separador);
  for (let i = 0; i < textoSinInvertir.length; i++) {
    for (let a = 0; a < textoInvertido.length; a++) {
      if (textoSinInvertir[i] === textoInvertido[a]) {
        console.log(
          `Hay coincidencia ${textoInvertido[a]} es igual a ${textoSinInvertir[i]}`
        );
        boolean = true;
      }
    }
  }
  console.info(`Hay palindromos: ${boolean}`);
  return true;
};

const miFuncion08 = (texto = "", patron = "") => {
  if (typeof texto != "string" || typeof patron != "string")
    console.error("No es un texto, por favor ingresa un texto");
  if (!texto || !patron) console.warm("El texto esta vacio");
  const textoACambiar = /xyz/gi;
  console.log(
    `La frase que queremos cambiar es: ${texto} eliminando el patron: ${patron} y quedaria asi ${texto.replace(
      textoACambiar,
      ""
    )}`
  );
};

const miFuncion09 = (min = undefined, max = undefined) => {
  if (typeof min != "number")
    return console.warn(`No ingresaste un numero: ${min} , ingresa un numero`);
  if (min === 0)
    return console.error(
      `Ingresaste un numero: ${min} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(min) === -1)
    return console.error(
      `Ingresaste un numero: ${min} nagativo, ingresa un numero positivo`
    );
  if (typeof max != "number")
    return console.warn(`No ingresaste un numero: ${max} , ingresa un numero`);
  if (max === 0)
    return console.error(
      `Ingresaste un numero: ${max} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(max) === -1)
    return console.error(
      `Ingresaste un numero: ${min} nagativo, ingresa un numero positivo`
    );
  let aleatorio = Math.floor(Math.random() * (max - min)) + min;
  console.log(aleatorio);
};

const miFuncion10 = (numero = undefined) => {
  if (typeof numero != "number")
    return console.warn(
      `No ingresaste un numero: ${numero} , ingresa un numero`
    );
  if (numero === 0)
    return console.error(
      `Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(numero) === -1)
    return console.error(
      `Ingresaste un numero: ${numero} nagativo, ingresa un numero positivo`
    );
  numero = numero.toString();
  const numeroInvertido = numero.split("").reverse().join("");
  if (numero === numeroInvertido)
    console.info(
      `El numero ${numero} es igual a el numero ${numeroInvertido} es capicua`
    );
  else {
    console.info(
      `El numero ${numero} no es igual a el numero ${numeroInvertido} no son capicua`
    );
  }
};

const miFuncion11 = (numero = undefined) => {
  if (typeof numero != "number")
    return console.warn(
      `No ingresaste un numero: ${numero} , ingresa un numero`
    );
  if (numero === 0)
    return console.error(
      `Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(numero) === -1)
    return console.error(
      `Ingresaste un numero: ${numero} nagativo, ingresa un numero positivo`
    );
  let factorial = 1;
  let numeroFactorial = numero;
  do {
    numeroFactorial = numeroFactorial * factorial;
    factorial++;
  } while (numero > factorial);
  console.info(`El numero factorial de ${numero} es: ${numeroFactorial}`);
};

const miFuncion12 = (numero = undefined) => {
  if (typeof numero != "number")
    return console.warn(
      `No ingresaste un numero: ${numero} , ingresa un numero`
    );
  if (numero === 0)
    return console.error(
      `Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`
    );
  let coincidencias = false;
  if (Math.sign(numero) === -1) {
    for (let i = -2; i > numero; i--) {
      console.log(i);
      console.log(coincidencias);
      if (numero % i === 0) {
        coincidencias = true;
        break;
      }
    }
    console.log(coincidencias);
    if (coincidencias == true)
      console.log(`El numero ${numero} No es un numero Primo`);
    else console.log(`El numero ${numero} es un numero Primo`);
  }
  if (Math.sign(numero) != -1) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        coincidencias = true;
        break;
      }
    }
    if (coincidencias == true)
      console.log(`El numero ${numero} No es un numero Primo`);
    else console.log(`El numero ${numero} es un numero Primo`);
  }
};

const miFuncion13 = (numero = undefined) => {
  if (typeof numero != "number")
    return console.warn(
      `No ingresaste un numero: ${numero} , ingresa un numero`
    );
  if (numero === 0)
    return console.error(
      `Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`
    );
  if (numero % 2 === 0) console.log("es par");
  else console.log("es impar");
};

const miFuncion14 = (numero = undefined, texto = "") => {
  if (typeof texto != "string")
    console.error("No es un texto, por favor ingresa un texto");
  if (!texto) console.warn("El texto esta vacio");
  if (typeof numero != "number")
    return console.warn(
      `No ingresaste un numero: ${numero} , ingresa un numero`
    );
  texto = texto.toUpperCase();
  if (texto.length !== 1 || !/(C|F)/.test(texto))
    return console.warn("Valor de la unidad no reconocido");
  const fahrenheit = (numero * 9) / 5 + 32;
  const celsius = ((numero - 32) * 5) / 9;
  if (texto === "C") console.log(`${numero}??C = ${fahrenheit}??F`);
  else console.log(`${numero}??F = ${celsius}??C`);
};

const miFuncion15 = (numero = undefined, base = undefined) => {
  if (typeof numero != "number")
    return console.warn(
      `No ingresaste un numero: ${numero} , ingresa un numero`
    );
  if (numero === 0)
    return console.error(
      `Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(numero) === -1)
    return console.error(
      `Ingresaste un numero: ${numero} nagativo, ingresa un numero positivo`
    );
  if (typeof base != "number")
    return console.warn(`No ingresaste un numero: ${base} , ingresa un numero`);
  if (base === 0)
    return console.error(
      `Ingresaste un numero: ${base} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(base) === -1)
    return console.error(
      `Ingresaste un numero: ${base} nagativo, ingresa un numero positivo`
    );

  if (base === 2) {
    const numeroADecimal = parseInt(numero, base);
    console.info(`${numero} en decimal es ${numeroADecimal} base 10`);
  }
  if (base === 10) {
    const numeroABinario = numero.toString(2);
    console.info(`${numero} en binario es ${numeroABinario} base 2`);
  }
};

const miFuncion16 = (numero = undefined, porcentaje = undefined) => {
  if (typeof numero != "number")
    return console.warn(
      `No ingresaste un numero: ${numero} , ingresa un numero`
    );
  if (numero === 0)
    return console.error(
      `Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(numero) === -1)
    return console.error(
      `Ingresaste un numero: ${numero} nagativo, ingresa un numero positivo`
    );
  if (typeof porcentaje != "number")
    return console.warn(
      `No ingresaste un numero: ${porcentaje} , ingresa un numero`
    );
  if (porcentaje === 0)
    return console.error(
      `Ingresaste un numero: ${porcentaje} igual a 0, ingresa un numero mayor`
    );
  if (Math.sign(porcentaje) === -1)
    return console.error(
      `Ingresaste un numero: ${porcentaje} nagativo, ingresa un numero positivo`
    );

  const compraConDescuento = numero - (numero * porcentaje) / 100;
  console.info(
    `Se aplico su descuento de ${porcentaje}% y el monto total a pagar es: ${compraConDescuento}`
  );
};

const miFuncion17 = (fecha) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");
  if (!fecha instanceof Date)
    return console.error("El valor que ingresaste no es una fecha valida");

  let diferencia = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(diferencia / aniosEnMs);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} a??os para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} a??os, desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el a??o actual ${fecha.getFullYear()}`);
};

const miFuncion18 = (texto = "") => {
  if (typeof texto != "string")
    return console.error("No es un texto, por favor ingresa un texto");
  if (!texto) return console.warn("El texto esta vacio");

  texto = texto.toLocaleLowerCase();
  const numeroVocales = texto.match(/[aeiou????????????]/gi).length;
  const numeroConsonantes = texto.match(/[bcdfghjklmn??pqrstvwxyz]/gi).length;
  console.log(
    `El numero de vocales es: ${numeroVocales} y el numero de consonantes es: ${numeroConsonantes}`
  );
};

const miFuncion19 = (nombreValido = "") => {
  if (typeof nombreValido != "string")
    return console.error("No es un texto, por favor ingresa un texto");
  if (!nombreValido) return console.warn("El texto esta vacio");
  let expReg = /^[A-Za-z????????????????????????????\s]+$/g.test(nombreValido);

  return expReg
    ? console.info(`${nombreValido}, es un nombre valido`)
    : console.warn(`${nombreValido}, No es un nombre valido`);
};

const miFuncion20 = (emailValido = "") => {
  if (typeof emailValido != "string")
    return console.error("No es un texto, por favor ingresa un texto");
  if (!emailValido) return console.warn("El texto esta vacio");
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      emailValido
    );
  return expReg
    ? console.info(`${emailValido}, es un nombre valido`)
    : console.warn(`${emailValido}, No es un nombre valido`);
};

const miFuncion21 = (numerosArray = undefined) => {
  if (numerosArray === undefined)
    return console.warn(`No ingresaste los numeros`);
  if (!(numerosArray instanceof Array))
    return console.warn(`No ingresaste un array`);
  if (numerosArray.length === 0) return console.error("El arreglo esta vacio");
  for (let num of numerosArray) {
    if (typeof num !== "number") "El dato no es del tipo numero";
  }
  const numerosElevados = numerosArray.map((el) => el * el);
  return console.info(
    `El numero= ${numerosArray} elevado al cuadrado es: ${numerosElevados}`
  );
};

const miFuncion22 = (arrayAltoBajo = undefined) => {
  if (arrayAltoBajo === undefined)
    return console.warn(`No ingresaste los numeros`);
  if (!(arrayAltoBajo instanceof Array))
    return console.warn(`No ingresaste un array`);
  if (arrayAltoBajo.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arrayAltoBajo) {
    if (typeof num !== "number") "El dato no es del tipo numero";
  }
  let numeroMasAlto = Math.max(...arrayAltoBajo);
  let numeroMasBajo = Math.min(...arrayAltoBajo);
  console.info(
    `El numero mas alto es: ${numeroMasAlto} y el numero mas bajo es: ${numeroMasBajo}`
  );
};

const miFuncion23 = (arrayParesImpares = undefined) => {
  if (arrayParesImpares === undefined)
    return console.warn(`No ingresaste los numeros`);
  if (!Array.isArray(arrayParesImpares))
    return console.warn(`No ingresaste un array`);
  const objeto = {
    pares: arrayParesImpares.filter((num) => num % 2 === 0),
    impares: arrayParesImpares.filter((num) => num % 2 === 1),
  };
  console.log(objeto);
};

const miFuncion24 = (numAscDes = undefined) => {
  if (numAscDes === undefined)
    return console.warn("No ingresaste ningun numero");
  if (numAscDes.length === 0) return console.warn("El arreglo esta vacio");
  if (!(numAscDes instanceof Array))
    return console.error("Los datos ingresados no son del tipo array");
  for (let num of numAscDes) {
    if (typeof num !== "number")
      return console.error(
        "El array no es solo de numeros, ingresa solo numeros"
      );
  }
  const objeto = {
    numAscDes,
    ascendente: numAscDes.map((el) => el).sort((a, b) => a - b),
    descendente: numAscDes.map((el) => el).sort((a, b) => b - a),
  };
  return console.info(objeto);
};

const miFuncion25 = (duplicados = undefined) => {
  if (duplicados === undefined)
    return console.warn("No ingresaste ningun numero");
  if (duplicados.length === 0) return console.warn("El arreglo esta vacio");
  if (!(duplicados instanceof Array))
    return console.error("Los datos ingresados no son del tipo array");
  let deleteDuplicados = [...new Set(duplicados.map((el) => el))];
  return console.log(deleteDuplicados);
};

const miFuncion26 = (promedio = undefined) => {
  if (promedio === undefined)
    return console.warn("No ingresaste ningun numero");
  if (promedio.length === 0) return console.warn("El arreglo esta vacio");
  if (!(promedio instanceof Array))
    return console.error("Los datos ingresados no son del tipo array");
  for (let num of promedio) {
    if (typeof num !== "number")
      return console.error(
        "El array no es solo de numeros, ingresa solo numeros"
      );
  }
  let elPromedio = 0;
  promedio.reduce((total, num, index, promedio) => {
    total += num;
    if (index === promedio.length - 1) {
      elPromedio = total / promedio.length;
      return console.log(
        `El promedio de ${promedio.join(" + ")} es lgual a ${elPromedio}`
      );
    } else return total;
  });
};

// llamando a las funciones

// miFuncion01(valores.texto01)
// miFuncion02(valores.texto02, valores.longitud)
// miFuncion03(valores.texto03,valores.separador)
// miFuncion04(valores.texto04,valores.repetidor)
// miFuncion05(valores.texto05)
// miFuncion06(valores.texto06,valores.palabra Repetida,valores.separador)
// miFuncion07(valores.texto07, valores.esPalindromo,valores.separador)
// miFuncion08(valores.texto08, valores.patron)
// miFuncion09(valores.minimo,valores.maximo)
// miFuncion10(valores.numero)
// miFuncion11(valores.numeroFactorial)
// miFuncion12(valores.numeroPrimo)
// miFuncion13(valores.numeroParImpar)
// miFuncion14(valores.grados, valores.medida)
// miFuncion15(valores.numeroAConvertir,valores.base)
// miFuncion16(valores.compra,valores.descuento)
// miFuncion17(valores.anio)
// miFuncion18(valores.cadenaTexto)
// miFuncion19(valores.nombreValido)
// miFuncion20(valores.emailValido)
// miFuncion21(valores.numerosArray)
// miFuncion22(valores.arrayAltoBajo)
// miFuncion23(valores.arrayParesImpares)
// miFuncion24(valores.numAscDes)
// miFuncion25(valores.duplicados)
// miFuncion26(valores.promedio)
