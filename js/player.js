let player1;

class Player {
    constructor(clase, vida, mana, fuerza, agilidad, velocidad) {
        this.clase = clase;
        this.vida = vida;
        this.mana = mana;
        this.fuerza = fuerza;
        this.agilidad = agilidad;
        this.velocidad = velocidad;
    }
    playerAttack(){
        let calcBaseDamage;
        if(this.mana > 0){
            calcBaseDamage = this.fuerza * this.mana / 1000;
        }else{
            calcBaseDamage = this.fuerza * this.agilidad / 1000;
        }
        let offSetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offSetDamage;
        // Numero de golpes
        let numberOfHits = Math.floor(Math.random() * Math.floor(this.agilidad / 10) / 2) + 1;
        let atackValues = [calcOutputDamage,numberOfHits];
        return atackValues;
    }
}


