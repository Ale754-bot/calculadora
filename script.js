let numeroactual="";
let numeroAnterior="";
let tipoDeOperacion;


//alert(Math.sqrt(9))
let num=""
(num**2)

function borrar(){
    document.getElementById("displayGrande").innerHTML = numeroactual;
    numeroactual="";
}

function raizcuadrada() {
    let numeroactual = document.getElementById("displayGrande").value;
    let resultado = Math.sqrt(numeroactual);document.getElementById("displayGrande").value = resultado;
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
