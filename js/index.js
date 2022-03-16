const listaSelecaoPokemons = document.querySelectorAll('.pokemon'); 
const pokemonsCard= document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon  => {
   
  pokemon.addEventListener('click', () => {
      //remover a classe aberto so do cartao que esta aberto
        const cartaoPokemonAbebrto = document.querySelector('.aberto')
        cartaoPokemonAbebrto.classList.remove('aberto')
      // ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
      const idPokemonSelecionado = pokemon.attributes.id.value;
      console.log(idPokemonSelecionado)
  /*     const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado;
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir); 
     cartaoPokemonParaAbrir.classList.add('aberto');  */
  })
})