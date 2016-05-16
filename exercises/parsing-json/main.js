var xhr = new XMLHttpRequest(); 
var pokemon = document.getElementById("pokemon-object"); 

xhr.onreadystatechange = function(urlPath) {
    if (xhr.readyState === 200 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText); 
        var objArray = [];  
        objArray = data.name; 
        console.log(data.meta.objects.name); 
        var paragraph = document.createElement("p");
        pokemon.appendChild(objArray); 
        document.getElementById("pokemon-object").appendChild(pokemon); 
    }
}

xhr.open("GET", "http://mean.codingcamp.us:6543/pokemon.json", true); 

xhr.send(); 