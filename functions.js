

//regular function
const valorNumerico = function(a){
    let res;
    res = a%2;
    if(res === 0){
        return res = `El valor ${a} es un numero par`;
    }
    return res = `El valor ${a} es un numero impar`;
}
console.log(valorNumerico(23));

//arrow function
const arrowFunction = (a) =>{
    let res;
    res = a%2;
    if(res === 0)return res = `El valor ${a} es un numero par`;
    return res = `El valor ${a} es un numero impar`;
}
console.log(arrowFunction(3));

//old regular function
function parImpar(a){
    let res= a%2;
    return  console.log(res===0 ?`El numero ${a} es par` : `El numero ${a} es impar`);
}   
parImpar(78);

/*
1. Sintaxis
2. this Contexto:
Función regular: El valor de this depende de cómo se llame la función. Puede cambiar según el contexto de ejecución.
Función flecha: No tiene su propio this. Hereda el this del contexto en el que se define, lo que puede evitar problemas con el this en callbacks.
3. arguments Objeto:
Función regular: Tiene acceso al objeto arguments, que es una colección de todos los argumentos pasados a la función.
Función flecha: No tiene su propio objeto arguments. Si necesitas acceder a los argumentos, puedes usar el operador rest (...).
4.Uso como métodos:
Función regular: Puede ser usada como método de un objeto y el this se referirá al objeto.
Función flecha: No es adecuada para ser usada como método de un objeto porque el this no se referirá al objeto.
5.Constructores:
Función regular: Puede ser usada como constructor y llamada con new.
Función flecha: No puede ser usada como constructor y lanzará un error si se intenta usar con new
*/
