function TrocarImagem(imagemNova) {
    document.querySelector(".starbucks").src = imagemNova;
}
function MudarCirculo(corNova) {
    let circulo = document.querySelector(".circulo");
    let corLetra = document.querySelector(".corLetra");
    let corFundo = document.querySelector(".corFundo");

    circulo.style.background = corNova;
    corLetra.style.color = corNova;
    corFundo.style.background = corNova;
}
