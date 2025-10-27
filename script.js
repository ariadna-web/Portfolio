/*title animation */
const palabras= ["ARIADNA", "a Web Developer", "a Programer"]
let indice= 0
function cambiarTexto(){
    const texto=
    document.getElementById("text");
    texto.textContent= palabras[indice]
    texto.style.animation= "none"
    void texto.offsetWidth
    texto.style.animation="fade 1s ease-in-out, blink 0.8s step-end infinite"
    indice= (indice + 1) % palabras.length
}
setInterval(cambiarTexto, 3000);