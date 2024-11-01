let ordenarPorPreco = document.getElementById('btnOrdenarPorPreco');
ordenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdernados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdernados);
}
