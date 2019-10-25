let juego = {
    setGameStart: function(tipo){
        this.resetPlayer(tipo);
        this.antesBatalla();
    },
    resetPlayer: function(tipo){
        switch (tipo) {
            case "mago":
                jugador = new Jugador(tipo, 125,250, 175, 105, 75);
                break;
            case "warrior":
                jugador = new Jugador(tipo, 190,0, 250, 100, 55);
                break;
            case "monje":
            jugador = new Jugador(tipo, 170,125, 190, 135, 100);
            break;
            case "ninja":
                jugador = new Jugador(tipo, 140,75, 140, 190, 150);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + tipo.toLowerCase() +'.jpg class="tipoPersonaje"><div><h3>'+ tipo +'</h3><p>Vida: '+ Jugador.vida +'</p><p>Magia: '+ Jugador.magia +'</p><p>Fuerza: '+ Jugador.fuerza +'</p><p>Agilidad: '+ Jugador.agilidad +'</p><p>Velocidad: '+ Jugador.velocidad +'</p> </div>'; // seleccionar imagen de personajes
    },
    antesBatalla: function(){
        let getHeader = document.querySelector(".header")
        let getActions = document.querySelector(".movimientos")
        let getArena = document.querySelector(".batalla")
        getHeader.innerHTML = '<p>Task: Encuentra un enemigo!'
        getActions.innerHTML ='<a href="#" class="preLucha" onclick="Juego.antesBatalla()">Busca un enemigo!</a>'
        getArena.style.visibility = "visible";
    },

    eligeLucha: function(){
        let getHeader = document.querySelector(".header")
        let getActions = document.querySelector(".movimientos")
        let getEnemy = document.querySelector(".enemigos")
        // Creado enemigos
    }

}