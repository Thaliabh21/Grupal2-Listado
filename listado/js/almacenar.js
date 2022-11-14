let registro = [];

function agregar (){
    let item = document.getElementById("item").value;
    if (item !== ""){
    registro.push(item);
    localStorage.setItem("dato", JSON.stringify(registro)) //Para guardar todo el registro en localStorage.
    document.getElementById("item").value=""; //Después de agregar, se elimina el registro del campo.
    }
    ver(registro);
}

function ver(){
    let lista="";
    for (let item of registro){
        lista+= `<li class="list-group-item">` + item + `</li>`;
    }
    document.getElementById("contenedor").innerHTML=lista;
}

function borrar(){
    registro.splice(0,registro.length);
   // registro= []; declarar el array vacío sería otra opción.
}

document.addEventListener("DOMContentLoaded", function(){
    let datoExtraido = localStorage.getItem("dato") // declaro una variable para obtener los datos de localStorage.
    registro = JSON.parse(datoExtraido) // parseo los datos obtenidos, igualando al array, de esta forma puedo recargar/cerrar y aún ver los datos.
    ver(registro);
    document.getElementById("agregar").addEventListener("click", function(){
        agregar();
    })
    
    document.getElementById("limpiar").addEventListener("click", function(){
        borrar();
        localStorage.setItem("dato", JSON.stringify(registro))
        ver();
    })
})