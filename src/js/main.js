const cambioDeTema = document.querySelector(".theme-toggle");
const iconoTema = document.querySelector(".toggle-circle i");
const cambioImagen = document.querySelector(".logo-img")

cambioDeTema.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    cambioDeTema.classList.toggle("active");

    if(document.body.classList.contains("light-mode")){
        iconoTema.classList.remove("fa-moon");
        iconoTema.classList.add("fa-sun");
    }else{
        iconoTema.classList.remove("fa-sun");
        iconoTema.classList.add("fa-moon");
    }

});
