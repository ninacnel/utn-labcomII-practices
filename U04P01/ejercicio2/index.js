function init(){

    var procesar = document.getElementById("procesar");

    nro = document.getElementById("nro");

    procesar.onclick = function(e){
        calcular();
    }
}

function calcular(){

    let n = parseFloat(nro.value);

    if(n>0){
        alert("El nro es positivo");
    }else if(n<0){
        alert("El nro es negativo");
    }else{
        alert("El nro es nulo");
    }
}