let juego = {
    setGameStart: function(p1clase){
        this.resetPlayer(p1clase);
        this.antesBatalla();
    },

    resetPlayer: function(p1clase) {
        switch (p1clase) {
            case "mago":
                player = new Player (p1clase, 125,250, 175, 105, 75);
                break;
            case "guerrero":
                player = new Player(p1clase, 190,0, 250, 100, 55);
                break;
            case "monje":
            player = new Player(p1clase, 170,125, 190, 135, 100);
            break;
            case "ninja":
                player = new Player(p1clase, 140,75, 140, 190, 150);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + p1clase.toLowerCase() +  '.jpg" class="img-avatar"><div><h3>' + p1clase 
        + '</h3><p class=".vida-player1">Vida: ' + player.vida + '</p><p>Mana: ' + player.mana + '</p><p>Fuerza: ' + player.fuerza + '</p><p>Agilidad: ' 
        + player.agilidad + '</p><p>Velocidad: ' + player.velocidad + '</p></div>';
    }, 

    antesBatalla: function(){
        let getHeader = document.querySelector(".header");
        let getMovimientos = document.querySelector(".movimientos");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Busca</p>';
        getMovimientos.innerHTML = '<br><a href="#" class="btn-prefight" onclick="juego.setFight()">Busca</a>';
        getArena.style.visibility = "visible";
        
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getMovimientos = document.querySelector(".movimientos");
        let getPlayer2 = document.querySelector(".player2");
    
        let player21 = new Player2("Mago", 125,250, 175, 105, 75);
        let player22 = new Player2("Guerrero", 190,0, 250, 100, 55);
        let player23 = new Player2("Monje", 170,125, 190, 135, 100);
        let player24 = new Player2("Ninja", 140,75, 140, 190, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
    
       
        switch (chooseRandomEnemy) {
            case 0:
                Player2 = player21;
                break;
            case 1:
            Player2 = player22;
            break;
            case 2:
                Player2 = player23;
                break;
            case 3:
            Player2 = player24;
            break;
            
            default:
                break;
        }
        getHeader.innerHTML = '<p>Elige</p>'
        getMovimientos.innerHTML = '<br><a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Ataca</a>';
        getPlayer2.innerHTML = '<img src="img/' + Player2.p2clase.toLowerCase() +  '.jpg" class="img-avatar-p2"><div><h3>' + Player2.p2clase 
        + '</h3><p class="vida-player2">Vida: ' + Player2.vida + '</p><p>Mana: ' + Player2.mana + '</p><p>Fuerza: ' + Player2.fuerza + '</p><p>Agilidad: ' 
        + Player2.agilidad + '</p><p>Velocidad: ' + Player2.velocidad + '</p></div>';


    }
    
}