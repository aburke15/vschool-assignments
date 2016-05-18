var url = "http://pokeapi.co/api/v1/pokedex/1/";

var pokemonList = $("#pokemon-list");

$.ajax(url, {
    success: function (data) {
        //console.log(data); 
        for (var i = 0; i < data.pokemon.length; i++) {
            //console.log(data.pokemon[i].name);
            var pokemonName = data.pokemon[i].name;
            var newElement = $('<a target="_blank" href="https://www.google.com/#q=' + pokemonName + '"><div class="col-xs-3 poke">' + pokemonName + '</div></a>');
            pokemonList.append(newElement);
        }
    },
});