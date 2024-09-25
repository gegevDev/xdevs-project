const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", () => {
    const notUltimoCartao = cartaoAtual != cartoes.length - 1;
  esconderCartaoSelecionado();

  if (notUltimoCartao) {
    cartaoAtual++;
    mostrarCartao();
  }
});

btnVoltar.addEventListener("click", () => {
    const notPrimeiroCartao = cartaoAtual >= 1;
  esconderCartaoSelecionado();

  if (notPrimeiroCartao) {
    cartaoAtual--;
    mostrarCartao();
  }
});

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}