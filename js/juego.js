let juego = {
    setGameStart: function(p1clase){
        this.resetPlayer(p1clase);
        this.antesBatalla();
    },

    resetPlayer: function(p1clase) {
        switch (p1clase) {
            case "mago":
                player1 = new Player (p1clase, 125,100, 175, 105, 75);
                break;
            case "guerrero":
                player1 = new Player(p1clase, 190,25, 250, 100, 55);
                break;
            case "monje":
                player1 = new Player(p1clase, 170,75, 190, 135, 100);
            break;
            case "ninja":
                player1 = new Player(p1clase, 140,50, 140, 190, 150);
                break;
            case "demonio":
            player1 = new Player(p1clase, 190,75, 250, 100, 55);
            break;
            case "bruja":
            player1 = new Player(p1clase, 125,100, 175, 105, 75);
            break;
            case "cazador":
            player1 = new Player(p1clase, 170,75, 190, 135, 100);
            break;
            case "druida":
            player1 = new Player(p1clase, 125,100, 175, 105, 75);
            break;
            case "picaro":
            player1 = new Player(p1clase, 140,50, 140, 190, 150);
            break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + p1clase.toLowerCase() +  '.jpg" class="img-avatar"><div><h3>' + p1clase 
        + '</h3><p class=".vida-player1">Vida: ' + player1.vida + '</p><p>Mana: ' + player1.mana + '</p><p>Fuerza: ' + player1.fuerza + '</p><p>Agilidad: ' 
        + player1.agilidad + '</p><p>Velocidad: ' + player1.velocidad + '</p></div>';
    }, 

    antesBatalla: function(){
        let getHeader = document.querySelector(".header");
        let getMovimientos = document.querySelector(".movimientos");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<h1>Batalla</h1>';
        getMovimientos.innerHTML = '<br><a href="#" class="btn-prefight" onclick="juego.setFight()"><center><h1>Busca</h1></center></a>';
        getArena.style.visibility = "visible";
        
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getMovimientos = document.querySelector(".movimientos");
        let getPlayer2 = document.querySelector(".player2");
    
        let player21 = new Player("Mago", 125,100, 175, 105, 75);
        let player22 = new Player("Guerrero", 190,25, 250, 100, 55);
        let player23 = new Player("Monje", 170,75, 190, 135, 100);
        let player24 = new Player("Ninja", 140,50, 140, 190, 150);
        let player25 = new Player("Demonio", 190,75, 250, 100, 55);
        let player26 = new Player("Bruja", 125,100, 175, 105, 75);
        let player27 = new Player("Cazador", 170,75, 190, 135, 100);
        let player28 = new Player("Druida", 125,100, 175, 105, 75);
        let player29 = new Player("Picaro", 140,50, 140, 190, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(8));
        let playerArray = [
            player21,
            player22,
            player23,
            player24,
            player25,
            player26,
            player27,
            player28,
            player29,
        ];
        player2 = playerArray[chooseRandomEnemy];
        
        getHeader.innerHTML = '<p>Elige</p>'
        getMovimientos.innerHTML = '<br><a href="#" class="btn-prefight" onclick="juego.hit()"><center><h1>Ataca</h1></center></a>';
        getPlayer2.innerHTML = '<img src="img/' + player2.clase.toLowerCase() +  '.jpg" class="img-avatar-p2"><div><h3>' + player2.clase 
        + '</h3><p class="vida-player2">Vida: ' + player2.vida + '</p><p>Mana: ' + player2.mana + '</p><p>Fuerza: ' + player2.fuerza + '</p><p>Agilidad: ' 
        + player2.agilidad + '</p><p>Velocidad: ' + player2.velocidad + '</p></div>';



    },
    hit: function(){
        let Player1Speed = player1.velocidad;
        let Player2Speed = player2.velocidad; 
         // CAmbiar vida segun los golpes 
    let getPlayer1Vida = document.querySelector(".vida-player1");
    let getPlayer2Vida = document.querySelector(".vida-player2");
    // Iniciar los ataques

    if (Player1Speed >= Player2Speed ){
        let playerAttackValues = player1.playerAttack();
        let totalDamage = playerAttackValues [0] * playerAttackValues [1];
        player2.vida = player2.vida - totalDamage;
        alert("El Player 1 golpeo " +playerAttackValues [0] +" de daño "+ playerAttackValues [1] + " veces.");
        if (player2.vida <= 0){
            alert("Gano el player 1!!!");
            getPlayer1Vida.innerHTML = 'Vida: '+ player1.vida;
            getPlayer2Vida.innerHTML = 'Vida: 0';

        }else{
            getPlayer2Vida.innerHTML = 'Vida: '+ player2.vida;
            let player2AttackValues = player2.playerAttack();
            let totalDamage = player2AttackValues [0] * player2AttackValues [1];
            player1.vida = player1.vida - totalDamage;
        alert("El Player 2 golpeo " +player2AttackValues [0] +" de daño "+ player2AttackValues [1] + " veces.");
        if (player1.vida <= 0){
            alert("Gano el player 2!!!");
            getPlayer1Vida.innerHTML = 'Vida: 0';
            getPlayer2Vida.innerHTML = 'Vida: '+ player2.vida;
        }else{
            getPlayer1Vida.innerHTML = 'Vida: '+ player1.vida;

        }
     }

    }
    if (Player2Speed >= Player1Speed ){
        let player2AttackValues = player2.playerAttack();
        let totalDamage = player2AttackValues [0] * player2AttackValues [1];
        player1.vida = player1.vida - totalDamage;
        alert("El Player 1 golpeo " +player2AttackValues [0] +" de daño "+ player2AttackValues [1] + " veces.");
        if (player1.vida <= 0){
            alert("Gano el player 2!!!");
            getPlayer2Vida.innerHTML = 'Vida: '+ player2.vida;
            getPlayer1Vida.innerHTML = 'Vida: 0';

        }else{
            getPlayerVida.innerHTML = 'Vida: '+ player1.vida;
            let playerAttackValues = player1.playerAttack();
            let totalDamage = playerAttackValues [0] * playerAttackValues [1];
            player1.vida = player1.vida - totalDamage;
        alert("El Player 1 golpeo " +playerAttackValues [0] +" de daño "+ playerAttackValues [1] + " veces.");
        if (Player2.vida <= 0){
            alert("Gano el player 1!!!");
            getPlayer2Vida.innerHTML = 'Vida: 0';
            getPlayer1Vida.innerHTML = 'Vida: '+ player1.vida;
        }else{
            getPlayer2Vida.innerHTML = 'Vida: '+ player2.vida;

    }
   }
  }
}
    

}