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
    },
    antesBatalla: function(){

    },

}