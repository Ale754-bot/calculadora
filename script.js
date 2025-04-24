let numeroactual="";
let numeroAnterior="";
let tipoDeOperacion;

const condicion=true
const condicion2=false
const numero1=2;
const numero2=2;

if(!condicion2){
    alert(true)
}


if(numero1>numero2){
    alert("numero1 es el mayor")
}else if(numero1<numero2){
    alert("numero2 es el mayor")
}else{
    alert("los 2 numeros son iguales")
}


function borrar(){
    document.getElementById("displayGrande").innerHTML = numeroactual;
    document.getElementById("displayChico").innerHTML = numeroAnterior;
    
}

function mostrar(numero){
    numeroactual=numeroactual+numero;
    document.getElementById("displayGrande").innerHTML = numeroactual;
}

function operacion(signo){
    numeroAnterior=numeroactual;
    document.getElementById("displayChico").innerHTML = numeroactual+signo;
    numeroactual="";
    tipoDeOperacion=signo;
}

function raizcuadrada(){
    document.getElementById("displayGrande").innerHTML = Math.sqrt(Number(numeroactual));
}
function porcentaje(){
    document.getElementById("displayGrande").innerHTML = Math.sqrt(Number(numeroactual))
}
function alcuadrado(){
    document.getElementById("displayGrande").innerHTML = Math.sqrt(Number(numeroactual))
}    

function igual(){
    document.getElementById("displayChico").innerHTML = numeroAnterior+tipoDeOperacion+numeroactual+"=";
    
    switch(tipoDeOperacion){
        case '+': 
            document.getElementById("displayGrande").innerHTML = Number(numeroAnterior)+Number(numeroactual);
        break;
        case '-': 
            document.getElementById("displayGrande").innerHTML = Number(numeroAnterior)-Number(numeroactual);
        break;
        case 'x': 
        document.getElementById("displayGrande").innerHTML = Number(numeroAnterior)*Number(numeroactual);
        break;
        case '/': 
        if(numeroactual==0){
            document.getElementById("displayGrande").innerHTML ="no se puede dividir por 0"
        }else{
            document.getElementById("displayGrande").innerHTML = Number(numeroAnterior)/Number(numeroactual);
        }
       break;

        default:
    }

}



let Array =["Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"]
    
for(let i=0; i<Array.length ; i++){
    console.log(Array[i]);
}
let ultimo=Array.pop()

let suma = 0;
let numerospares=[];

for(let i=2; i<=1000 ; i += 2){
    numerospares.push(i);
    suma += i;
}
console.log(numerospares);
console.log(suma)



