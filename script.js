let numeroactual="";
let numeroAnterior="";
let tipoDeOperacion;



function borrar(){
    document.getElementById("displayGrande").innerHTML = numeroactual;
    numeroactual="";
}

function borrartodo(){

        this.numeroactual = '';
        this.numeroAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    
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
        document.getElementById("displayGrande").innerHTML = Number(numeroAnterior)/Number(numeroactual);
        break;
    
        default:
    }

}


let array =["Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"]
for(let i=0; i<Array.length ; i++){
console.log(Array[i]);
}
