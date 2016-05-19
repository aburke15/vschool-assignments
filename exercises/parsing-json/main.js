var xhr = new XMLHttpRequest();
var pokemon = document.getElementById("pokemon-object");

function parsePokemon(urlPath) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var pokemonArray = data.objects[0].pokemon;
            for (var i = 0; i < pokemonArray.length; i++) {
                console.log(pokemonArray[i].name);
            }

            //        var objArray = [];  
            //        objArray = data.name; 
            //        console.log(data.meta.objects.name); 
            //        var paragraph = document.createElement("p");
            //        pokemon.appendChild(objArray); 
            //        document.getElementById("pokemon-object").appendChild(pokemon); 
        }
    }

    xhr.open("GET", urlPath, true);

    xhr.send();
}

parsePokemon("http://mean.codingcamp.us:6543/pokemon.json"); 