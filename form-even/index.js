// var valor=document.getElementById(“texto”).value;

// var e = document.getElementById("elementId");
// var value = e.options[e.selectedIndex].value;
// var text = e.options[e.selectedIndex].text;

// function init(){

//     var enviar = document.getElementById("enviar");

//     tipo = document.getElementById("select_id");


// }
const enviar = document.getElementById("enviar");
enviar.onclick = opcion();
function opcion() {
    let eselect = document.getElementById("select_id");
    let eindice = eselect.selectedIndex;  
    console.log("El género del libro es: ", eselect.options[eindice].text);
}