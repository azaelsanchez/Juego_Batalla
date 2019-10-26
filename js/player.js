let player1;

function Player (p1clase, vida, mana, fuerza, agilidad, velocidad ) {
    this.p1clase = p1clase;
    this.vida = vida;
    this.mana = mana;
    this.fuerza = fuerza;
    this.agilidad = agilidad;
    this.velocidad = velocidad;
}

let PlayerMoves = {
    calcAttack: function (getPlayer1Speed,getPlayer2Speed) {
        // Quien ataca antes?
       this.getPlayer1Speed = getPlayer1Speed;
       this.getPlayer2Speed = getPlayer2Speed;
    },
         //Player1 ataques
     playerAttack : function(){
        let calcBaseDamage;
        if(Player.mana > 0){
            calcBaseDamage = Player.fuerza * Player.mana / 1000;
        }else{
            calcBaseDamage = Player.fuerza * Player.agilidad / 1000;
        }
        let offSetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offSetDamage;
        // Numero de golpes
        let numberOfHits = Math.floor(Math.random() * Math.floor(Player.agilidad / 10) / 2) + 1;
        let atackValues = [calcOutputDamage,numberOfHits];
        return atackValues;
    },
     //Player2 ataques
     player2Attack : function(){
        let calcBaseDamage;
        if(Player2.mana > 0){
            calcBaseDamage = Player2.fuerza * Player2.mana / 1000;
        }else{
            calcBaseDamage = Player2.fuerza * Player2.agilidad / 1000;
        }
        let offSetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offSetDamage;
        // Numero de golpes
        let numberOfHits = Math.floor(Math.random() * Math.floor(Player2.agilidad / 10) / 2) + 1;
        let atackValues = [calcOutputDamage,numberOfHits];
        return atackValues;
    },
    // CAmbiar vida segun los golpes 
     getPlayer1Vida = document.querySelector(".vida-player1");
     getPlayer2Vida = document.querySelector(".vida-player2");
    // Iniciar los ataques
   }
    if (getPlayer1Speed >= getPlayer2Speed ){
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues [0] * playerAttackValues [1];
        Player2.vida = Player2.vida - totalDamage;
        alert("El PLayer 1 golpeo " +playerAttackValues [0] +" de daño "+ playerAttackValues [1] + " veces.");
        if (Player2.vida <= 0){
            alert("Gano el player 1!!!");
            getPlayer1Vida.innerHTML = 'Vida: '+ Player.vida;
            getPlayer2Vida.innerHTML = 'Vida: 0';

        }else{
            getPlayer2Vida.innerHTML = 'Vida: '+ Player2.vida;
            let player2AttackValues = player2Attack();
            let totalDamage = player2AttackValues [0] * player2AttackValues [1];
        Player.vida = Player.vida - totalDamage;
        alert("El PLayer 2 golpeo " +player2AttackValues [0] +" de daño "+ player2AttackValues [1] + " veces.");
        if (Player.vida <= 0){
            alert("Gano el player 2!!!");
            getPlayer1Vida.innerHTML = 'Vida: 0';
            getPlayer2Vida.innerHTML = 'Vida: '+ Player2.vida;
        }else{
            getPlayer1Vida.innerHTML = 'Vida: '+ Player.vida;

        }
     }

    }
    if (getPlayer2Speed >= getPlayer1Speed ){
        let player2AttackValues = player2Attack();
        let totalDamage = playerAttack2Values [0] * playerAttack2Values [1];
        Player.vida = Player.vida - totalDamage;
        alert("El PLayer 1 golpeo " +player2AttackValues [0] +" de daño "+ player2AttackValues [1] + " veces.");
        if (Player.vida <= 0){
            alert("Gano el player 2!!!");
            getPlayer2Vida.innerHTML = 'Vida: '+ Player2.vida;
            getPlayer1Vida.innerHTML = 'Vida: 0';

        }else{
            getPlayerVida.innerHTML = 'Vida: '+ Player.vida;
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues [0] * playerAttackValues [1];
        Player.vida = Player.vida - totalDamage;
        alert("El PLayer 1 golpeo " +playerAttackValues [0] +" de daño "+ playerAttackValues [1] + " veces.");
        if (Player2.vida <= 0){
            alert("Gano el player 1!!!");
            getPlayer2Vida.innerHTML = 'Vida: 0';
            getPlayer1Vida.innerHTML = 'Vida: '+ Player.vida;
        }else{
            getPlayer2Vida.innerHTML = 'Vida: '+ Player2.vida;

        }
     }

    }

 }
}