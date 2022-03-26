const datosPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    //promesa para datos
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachuSad.gif","./pikachuSad.gif","./pikachuSad.gif","./pikachuSad.gif");
            let avisoError ="no se encontro al pokemon";
            parrafo(avisoError,"mensaje");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            //muestra la data del pokemon en formato JSON
            console.log(data);
            //imagenes del pokemon
            let pokeImg = data.sprites.front_default;
            let pokeBack =data.sprites.back_default;
            let pokeW = data.sprites.other.dream_world.front_default;
            let pokeO =data.sprites.other.home.front_default;
            pokeImage(pokeImg,pokeBack,pokeW,pokeO);
            parrafo("8bits","bit1");
            parrafo("8bits","bit2");
            parrafo("DreamWorld","Dream");
            parrafo("3D","3d");
            
            //nombre del pokemon
            let pokeNombre = "Nombre: "+data.name;
            let id1="mensaje"
            parrafo(pokeNombre,id1);
            //tipo de pokemon
            let id2="tipo"
            let tipo= "Tipo: "+data.types[0].type.name;
            parrafo(tipo,id2);
            
            // altura
            let id3="estatura";
            //let altura=data.weight;
            let altura= "Altura: "+data.height/10 +"m";
            parrafo(altura,id3);
            //peso
            let id4="peso";
            let peso=data.weight;
            let pesoP= "Peso: "+peso/10 +"kg";
            parrafo(pesoP,id4);

            //estadisticas
            var id5="estadisticas"
            var cDatos = "Estadisticas"
            for(var mov=0; mov<(data.stats).length; mov++){
               var datos=data.stats[mov].base_stat;
               var dNombre= data.stats[mov].stat.name;
               cDatos=cDatos+"; "+dNombre+": "+datos;
            }
            parrafo(cDatos,id5);
            
            //movimientos
            var formato= "Movimientos"
            for(var mov1=0; mov1<=10; mov1++){
                // var datos1=data.moves[mov1].base_stat;
                var dNombre1= data.moves[mov1].move.name;
                
                formato  =formato+"; "+ dNombre1;
                
                var idM="movimientos"
                
             }parrafo(formato,idM);

        }
    });
}



const pokeImage = (url,dos,tres,cuatro) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    const pokePhoto2 = document.getElementById("pokeImgB");
    pokePhoto2.src = dos;
    const pokePhoto3 = document.getElementById("pokeImgW");
    pokePhoto3.src = tres;
    const pokePhoto4 = document.getElementById("pokeImgO");
    pokePhoto4.src = cuatro;
} 

//var msg="hola"
const parrafo = (msg,identificador) =>{
    const aviso= document.getElementById(identificador);
    aviso.textContent=msg;
    
} 
//parrafo(msg);