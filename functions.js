

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

function parImpar(a){


}