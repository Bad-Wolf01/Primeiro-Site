//alert("Olá mundo!")
let botaoTema = document.getElementById("btnTema");

botaoTema.addEventListener("click", function() {

    if (document.body.classList.contains("temaEscuro")) {
        document.body.classList.remove("temaEscuro");
    } else {
        document.body.classList.add("temaEscuro");
    }

});