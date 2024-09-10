

function houndRush() {
    damage1 = Math.floor(Math.random() * (20 - 10)) + 10;
    health2 = health2 - damage1;
    healthBar(false);
    elements = document.querySelectorAll('.player2Health');

    // Loop through NodeList and change innerHTML
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Health: " + health2;
    }

    /*display damage*/
    document.getElementById("damageAmount2").innerHTML = "-" + damage1;
    setTimeout(() => { 
        document.getElementById("damageAmount2").innerHTML = "";
    }, 1200);

    if (duel>0) {
        duel=duel-1;
        health1 = health1 - damage1*1/2;
        health1=Math.round(health1);
        damage1 = Math.round(damage1*1/2);
        document.getElementById("damageAmount1").innerHTML = "-" + damage1;
        setTimeout(() => { 
            document.getElementById("damageAmount1").innerHTML = "";
        }, 1200);
    
        elements = document.querySelectorAll('.player1Health');
    
        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health1;
        }
    } else if (duel==0) {
        document.getElementById("riposte").style.display = "none";
    }

    bleed2=bleed2+3;
    if (player2=="bountyhunter") {
        document.getElementById("status3").style.display = "inline";
        document.getElementById("status3").title = "This player will bleed 15 damage for " + bleed2 + " round(s).";
    } else if (player2=="highwayman") {
        document.getElementById("status8").style.display = "inline";
        document.getElementById("status8").title = "This player will bleed 15 damage for " + bleed + " round(s).";
    }
    document.getElementById("status3").style.display = "inline";
    document.getElementById("status3").title = "This player will bleed 15 damage for " + bleed2 + " round(s).";

    document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterAttack.png";
    player2Animations(true);
    setTimeout(() => { 
        document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterIdle.gif";
        player2Animations(false);
    }, 1200);

    turn++;
    document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
    checks();
    disableButtons(true,false);
}





function lickWounds() {
    healAmount = Math.floor(Math.random() * (25 - 15)) + 15;
    health1 = health1 + healAmount;
    cryLimit = cryLimit - 1;
    elements = document.querySelectorAll('.player1Health');
    if (duel>0) {
        duel=duel-1;
        if (duel==0) {
            document.getElementById("riposte").style.display = "none";
        }
    }
    // Loop through NodeList and change innerHTML
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Health: " + health1;
    }
    document.getElementById("damageAmount1").innerHTML = "+" + healAmount;

    setTimeout(() => { 
        document.getElementById("damageAmount1").innerHTML = "";
    }, 1200);

    document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterHeal.png";
    setTimeout(() => { 
        document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterIdle.gif";
    }, 1200);

    turn++;
    document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
    checks();
    disableButtons(true,false);
}







function blackjack() {
    damage1 = Math.floor(Math.random() * (30 - 20)) + 20;
    health2 = health2 - damage1;
    healthBar(false);
    elements = document.querySelectorAll('.player2Health');

    // Loop through NodeList and change innerHTML
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Health: " + health2;
    }

    /*display damage*/
    document.getElementById("damageAmount2").innerHTML = "-" + damage1;
    setTimeout(() => { 
        document.getElementById("damageAmount2").innerHTML = "";
    }, 1200);

    if (duel>0) {
        duel=duel-1;
        health1 = health1 - damage1*1/2;
        health1=Math.round(health1);
        damage1 = Math.round(damage1*1/2);
        document.getElementById("damageAmount1").innerHTML = "-" + damage1;
        setTimeout(() => { 
            document.getElementById("damageAmount1").innerHTML = "";
        }, 1200);
    
        elements = document.querySelectorAll('.player1Health');
    
        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health1;
        }
    } else if (duel==0) {
        document.getElementById("riposte").style.display = "none";
    }

    document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterClub.png";
    player2Animations(true);
    setTimeout(() => { 
        document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterIdle.gif";
        player2Animations(false);
    }, 1200);

    turn++;
    document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
    checks();
    disableButtons(true,false);
}







function targetWhistle(){
    if (player2=="bountyhunter") {
        document.getElementById("status4").style.display = "inline";
    } else if (player2=="highwayman") {
        document.getElementById("status7").style.display = "inline";
    }
    if (duel>0) {
        duel=duel-1;
        if (duel==0) {
            document.getElementById("riposte").style.display = "none";
        }
    }
    document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterWhistle.png";
    player2Animations(true);
    setTimeout(() => { 
        document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterIdle.gif";
        player2Animations(false);
    }, 1200);

    turn++;
    document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
    checks();
    disableButtons(true,false);
}
