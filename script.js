// primeira maneira
//function aumentarFonte() {
    //document.body.style.fontSize =
        //parseFloat(getComputedStyle(document.body).fontSize) + 5 + "px";
//}

// segunda maneira

function aumentarFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = tamanhoAtual + 5 + "px"
    });
}
function diminuirFonte() {
    document.querySelectorAll("*").forEach(function (element) {
        const tamanhoAtual = parseFloat(getComputedStyle(element).fontSize);
        element.style.fontSize = tamanhoAtual - 5 + "px";
    });
}

function alternarContraste() {
    var body = document.body;
    body.classList.toggle("alto-contraste");
}