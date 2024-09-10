function wickedSlice() {
    if (turn==2) {
        damage2 = Math.floor(Math.random() * (30 - 20)) + 20;
        /*Player 1 move*/
        /*remove health*/
        if (armor>0) {
            damage2 = damage2 - 20;
            health1 = health1 - damage2;
            armor=armor-1;
            if (armor==0){
                document.getElementById("guard").style.display = "none";
            }
        } else {
            health1 = health1 - damage2;
        }
        healthBar(true);
        /*display health*/
        var elements = document.querySelectorAll('.player1Health');

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health1;
        }

        /*display damage*/
        document.getElementById("damageAmount1").innerHTML = "-" + damage2;
        setTimeout(() => { 
            document.getElementById("damageAmount1").innerHTML = "";
        }, 1200);


        /*animation changes*/
        document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanAttack.png";
        player1Animations(true);
        setTimeout(() => { 
            document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanIdle.gif";
            player1Animations(false);
        }, 1200);


        /*turn change*/
        turn--;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
        disableButtons(false,true);
        wincheck();
        bleedcheck2();
    }
}
function duelistAdvance() {
    if (turn==2) {
        duel=duel+3;
        document.getElementById("riposte").style.display = "inline";
        damage2 = Math.floor(Math.random() * (25 - 15)) + 15;
        /*Player 1 move*/
        /*remove health*/
        if (armor>0) {
            damage2 = damage2 - 20;
            health1 = health1 - damage2;
            armor=armor-1;
            if (armor==0){
                document.getElementById("guard").style.display = "none";
            }
        } else {
            health1 = health1 - damage2;
        }
        healthBar(true);
        /*display health*/
        var elements = document.querySelectorAll('.player1Health');

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health1;
        }

        /*display damage*/
        document.getElementById("damageAmount1").innerHTML = "-" + damage2;
        setTimeout(() => { 
            document.getElementById("damageAmount1").innerHTML = "";
        }, 1200);


        /*animation changes*/
        document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanReflect.png";
        player1Animations(true);
        setTimeout(() => { 
            document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanIdle.gif";
            player1Animations(false);
        }, 1200);


        /*turn change*/
        turn--;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
        disableButtons(false,true);
        wincheck();
        bleedcheck2();
    }
}
function pointBlank() {
    if (turn==2) {
        damage2 = Math.floor(Math.random() * (40 - 10)) + 10;
        /*Player 1 move*/
        /*remove health*/
        if (armor>0) {
            damage2 = damage2 - 20;
            health1 = health1 - damage2;
            armor=armor-1;
            if (armor==0){
                document.getElementById("guard").style.display = "none";
            }
        } else {
            health1 = health1 - damage2;
        }
        healthBar(true);
        /*display health*/
        var elements = document.querySelectorAll('.player1Health');

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health1;
        }

        /*display damage*/
        document.getElementById("damageAmount1").innerHTML = "-" + damage2;
        setTimeout(() => { 
            document.getElementById("damageAmount1").innerHTML = "";
        }, 1200);


        /*animation changes*/
        document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanShot.png";
        player1Animations(true);
        setTimeout(() => { 
            document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanIdle.gif";
            player1Animations(false);
        }, 1200);


        /*turn change*/
        turn--;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
        disableButtons(false,true);
        wincheck();
        bleedcheck2();
	}
}
function openVein() {
    if (turn==2) {
        damage2 = Math.floor(Math.random() * (20 - 15)) + 15;
        if (armor>=2) {
            damage2 = damage2 - 20;
            health1 = health1 - damage2;
            if (armor==0){
                document.getElementById("guard").style.display = "none";
            }
        } else {
            health1 = health1 - damage2;
        }


        healthBar(true);
        elements = document.querySelectorAll('.player1Health');

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health1;
        }

        document.getElementById("damageAmount1").innerHTML = "-" + damage2;
        setTimeout(() => { 
            document.getElementById("damageAmount1").innerHTML = "";
        }, 1200);

        bleed=bleed+3;
        if (player1=="crusader") {
            document.getElementById("status2").style.display = "inline";
            document.getElementById("status2").title = "This player will bleed 15 damage for " + bleed + " round(s).";
        } else if (player1=="houndmaster") {
            document.getElementById("status6").style.display = "inline";
            document.getElementById("status6").title = "This player will bleed 15 damage for " + bleed + " round(s).";
        }

        document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanAttack.png";
        player1Animations(true);
        setTimeout(() => { 
            document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanIdle.gif";
            player1Animations(false);
        }, 1200);
        turn--;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
        disableButtons(false,true);
        wincheck();
        bleedcheck2();
    }
    
}
