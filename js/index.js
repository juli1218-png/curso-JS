// var nombreVar = "Soy var"; //Nunca usar
// let nombreLet = "Soy let";
// nombreLet = "Soy UNA VARIABLE QUE CAMBIA";
// const $PI = 3.14159;
// const $FECHADENACIMIENTO = "05/10/2026";


// console.log(nombreLet);

// ---------- 2.2 Tipos de datos primitivos ----------
// let numero = 42;              // Number Int Entero
// let decimal = 3.14;           // Number Float Flotante
// let texto = "Hola";           // String
// let booleano = true;          // Boolean
// let nulo = null;              // Null
// let indefinido;               // Undefined

// console.log("Number:", numero);
// console.log("String:", texto);
// console.log("Boolean:", booleano);
// console.log("Null:", nulo);
// console.log("Undefined:", indefinido);

// ---------- 2.3 typeof ----------
// console.log("typeof numero:", typeof numero);         // "number"
// console.log("typeof texto:", typeof texto);           // "string"
// console.log("typeof booleano:", typeof booleano);     // "boolean"
// console.log("typeof nulo:", typeof nulo);             // "object" (¡peculiaridad!)
// console.log("typeof indefinido:", typeof indefinido); // "undefined"

// ---------- 2.4 Conversión de tipos ----------
// Implícita (coerción)

// console.log(5 + 3);
// console.log("5" + 3);
// console.log("andres" + " " + "cifuentes");
// console.log("andres" + " cifuentes");

// console.log("5" - 2);
// console.log(true + 1);

// Explícita
// console.log(typeof "123");
// console.log(typeof Number("123.33333333"));
// console.log(Number("123") * 2);
// console.log("123" * 2);
// console.log("321" + 2);
// console.log(String(321) + "2");
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(parseInt("258"));
// console.log(parseInt("258.45"));
// console.log(parseFloat("258.45"));
// let resultado = parseFloat("2.6") * 2
// console.log(resultado);
// console.log(typeof resultado);

// ---------- EJERCICIO 2 ----------
// 1. Declara una variable con tu nombre, otra con tu edad y otra con tu ciudad.
// 2. Imprime en consola: "Me llamo X, tengo Y años y vivo en Z".
// 3. Convierte tu edad (string) a número y súmale 5.


// Solución:
// let miNombre = "Ana";
// let miEdad = "25";
// let miCiudad = "Medellín";
// console.log(`Me llamo ${miNombre}, tengo ${miEdad} años y vivo en ${miCiudad}`);
// let edadNum = Number(miEdad) + 5;
// console.log("Edad + 5:", edadNum);

// ============================================================
// TEMA 3: OPERADORES
// ============================================================

// ---------- 3.1 Aritméticos ----------

// let a = 10, b = 3, c;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// ---------- 3.2 Asignación ----------
// c = 5;
// let d = 10;
// c++;
// c++;
// c++;
// c++;

// d--;
// d--;
// d--;
// d--;
// d--;
// d--;
// console.log(c);
// console.log(d);
// let e = 10, f = 20;

// e = e + 2;
// e += 30;
// console.log(e);

// f -= 5;
// f = f - 5;
// console.log(f);

// e *= 9;
// console.log(e);

// f /= 2;
// console.log(f);

// ---------- 3.3 Comparación ----------

// console.log(5 == 5); // true
// console.log("5" == 5); // true compara valor
// console.log("5" === 5); // false compara valor y tipo
// console.log(5 != 5); // false
// console.log("5" != 5); // false
// console.log("5" !== 5); // true

// ---------- 3.4 Lógicos ----------

// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true);         // false
// console.log(!false);        // true

// ---------- 3.5 Incremento/Decremento ----------
// d = 5;
// console.log("d++:", d++); // 5 (imprime y luego suma)
// console.log("d:", d);     // 6
// console.log("++d:", ++d); // 7 (suma y luego imprime)

// ---------- 3.6 Ternario ----------

// let edad = 14;

// let respuesta = (edad >= 18) ? "Puedes emborracharte" : "pidele a tu mami leche";

// console.log(respuesta)

// console.log (
//     "tu nombre es: " + miNombre + 
//     "\n y tu edad es de: " + miEdad + 
//     "\n y usted vive en: " + miCiudad
// );

// let miNombre = prompt(`Por favor ingresa tu nombre: `);
// let miEdad = prompt(`Por favor ingresa tu edad: `);
// let miCiudad = prompt(`Por favor ingresa tu ciudad: `);

// console.log (`
// tu nombre es: ${miNombre}  
// y tu edad es de:  ${miEdad}  
// y usted vive en: ${miCiudad}
//     `);

// ---------- EJERCICIO 3 ----------
// 1. Pide dos números y muestra su suma, resta, multiplicación y división.
// 2. Determina si un número es par usando el operador módulo.
// 3. Usa el operador ternario para indicar si un número es positivo o negativo.


// ---------- 4.1 if / else if / else ----------

// Calcular el precio con descuento segun la cantidad

// mayor igual a 10 tiene un descuento del 20%
// mas de 5 tiene un descuento del 10%
// si compra menos de 5 no tiene descuento 0%

// Productos
let licor = prompt(`
*** Listado de Productos ***

Selecciones por favor un producto: 

1. Ron Amarillo
2. Aguardiente Antioqueño
3. Aguardiente Nectar
4. Vodka Absolute
*** Listado de Productos ***
    `);

let nombreLicor = "";
let precio = 0;
switch (licor) {
    case "1":
        nombreLicor = "Ron Amarillo"
        precio = 100000
        alert(`Seleccionaste ${nombreLicor}`)
        break;
    case "2":
        nombreLicor = "Aguardiente Antioqueño"
        precio = 200000
        alert(`Seleccionaste ${nombreLicor}`)

        break;
    case "3":
        nombreLicor = "Aguardiente Nectar"
        precio = 300000
        alert(`Seleccionaste ${nombreLicor}`)

        break;
    case "4":
        nombreLicor = "Vodka Absolute"
        precio = 400000
        alert(`Seleccionaste ${nombreLicor}`)
        break;
        
        default:
        alert(`Opción incorecta, vuelva a intentarlo`)
        break;
}

let cantidad = parseInt(prompt(`Ingrese la cantidad: `));

let dto = 0;

const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: '2',
    })

if (cantidad >= 10) {
    dto = 0.2;
} else if (cantidad > 5 && cantidad < 10) {
    dto = 0.1;
} else { dto = 0 }

let aplicarDto = 0;
let subtotal = 0;

if (cantidad > 10) {
    aplicarDto = precio - (precio * dto);
    subtotal = aplicarDto * cantidad;
} else if (cantidad > 5 && cantidad < 10) {
    aplicarDto = precio - (precio * dto);
    subtotal = aplicarDto * cantidad;
} else {
    aplicarDto = precio - (precio * dto);
    subtotal = aplicarDto * cantidad;
}
console.log(`
*** Detalle de la compra ***
Producto: Producto: ${formatoCOP.format(nombreLicor)}
Cantidad: ${formatoCOP.format(cantidad)}
Precio: ${formatoCOP.format(precio)}
Descuento: ${formatoCOP.format(dto*100)}% 
Descuento aplicado: ${formatoCOP.format(aplicarDto)}
Subtotal: ${formatoCOP.format(subtotal)}
*** Vuelva Pronto ***
`);

// const precio = 1234567.89;
// const totalAPagar= 1122445566.667788;
// peso colombiano 



// const formatoCOP = new Intl.NumberFormat('es-CO', {
//     style: 'currency',
//     currency: 'COP',
//     maximumFractionDigits: '2',++
// });

// console.log(formatoCOP.format(precio));


//  dolares en formato


// const formatoUSA =  new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     maximumFractionDigits: '10',
// })
// console.log(formatoUSA.format(totalAPagar));

//  euros en formato 

// const formatoESP =  new Intl.NumberFormat('es-ES', {
//     style: 'currency',
//     currency: 'EUR',
//     maximumFractionDigits: '10',
// })
// console.log(formatoESP.format(totalAPagar));