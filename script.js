let formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {
  // Bloqueia o refresh da página
  e.preventDefault();

  // Armazenando a url da api em uma variavel
  let urlForm = "https://pokeapi.co/api/v2/pokemon/";

  // Valor do input name
  let nome = document.getElementById("name");

  // Concatenando a url com o valor do input
  urlForm = urlForm + nome.value;

  // Transformando os valores em minusculo
  urlForm = urlForm.toLocaleLowerCase();

  // Armazenando a area de resposta do html em uma variavel
  let resposta = document.getElementById("conteudo");

  // Armazenando o campo de imagem em uma variavel
  let imagem = document.getElementById("imgPokemon");

  // Resposta em HTML
  let html = "";

  fetch(urlForm)
    .then((resposta) => resposta.json())
    .then(function (data) {
      console.log(data);
      html = "Nome: " + maiuscula(data.name) + "<br>";
      html = html + "Type: " + maiuscula(data.types[0].type.name);
      resposta.innerHTML = html;

      imagem.innerHTML =
        "<img src ='" +
        data.sprites.front_default +
        "'> <img src ='" +
        data.sprites.back_default +
        "'>";
    })
    .catch(function (err) {
      console.log(err);
    });
});

function maiuscula(val) {
  return val[0].toUpperCase() + val.substr(1);
}
