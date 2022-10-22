function cargarResultado(){
    const nombrePersona = prompt("ingrese el nombre del encuestado");
    const totalPreguntas = prompt("Ingrese el total de preguntas realizadas");
    const preguntasCorrectas = prompt("Ingrese la cantidad de preguntas respondidas de forma correcta");

    let porcentaje = parseInt(preguntasCorrectas) * 100/parseInt(totalPreguntas);

    if (porcentaje >= 90){
        alert(nombrePersona + " es de nivel superior");
    } else if (porcentaje >= 75) {
        alert(nombrePersona + " es de nivel medio");
    } else if (porcentaje >= 50) {
        alert(nombrePersona + " es de nivel regular");
    } else {
        alert(nombrePersona + " está fuera de nivel");
    }
}