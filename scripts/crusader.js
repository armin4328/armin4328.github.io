
function smite() {
    if (turn==1) {
        let damage1 = Math.floor(Math.random() * (30 - 20)) + 20;
        /*Player 1 move*/
        /*remove health*/
        health2 = health2 - damage1;
        healthBar(false);
        /*display health*/
        var elements = document.querySelectorAll('.player2Health');

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
            if (duel==0) {
            document.getElementById("riposte").style.display = "none";
            }
        }
        
        /*animation changes*/
        document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderAttack.png";
        player2Animations(true);
        setTimeout(() => { 
            document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderIdle.gif";
            player2Animations(false);
        }, 1200);

        /*button changes*/
        disableButtons(true,false);


        /*turn change*/
        turn++;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
	}
    checks();
}
function defend() {
    if (turn==1) {
        armor=2;
        document.getElementById("guard").style.display = "inline";
        if (duel>0) {
            duel=duel-1;
            if (duel==0) {
                document.getElementById("riposte").style.display = "none";
            }
        }
        document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderDefend.png";
        setTimeout(() => { 
            document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderIdle.gif";
        }, 1200);
        turn++;
        disableButtons(true,false);
        
    }   
    checks();
}
function inspiringCry() {
    if (turn==1) {
        if (cryLimit==0) {
            document.getElementById("inspiringCry").disabled = true;
        } else if (cryLimit > 0) {
            health1=health1+25;
            cryLimit = cryLimit - 1;
            if (duel>0) {
                duel=duel-1;
                if (duel==0) {
                    document.getElementById("riposte").style.display = "none";
                }
            }
            var elements = document.querySelectorAll('.player1Health');

            // Loop through NodeList and change innerHTML
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = "Health: " + health1;
            }
            document.getElementById("damageAmount1").innerHTML = "+" + 30;

            setTimeout(() => { 
                document.getElementById("damageAmount1").innerHTML = "";
            }, 1200);

            document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderHeal.png";
            setTimeout(() => { 
                document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderIdle.gif";
            }, 1200);
            turn++;
            disableButtons(true,false);
        }
    }   
    checks();
}
function lance() {
    if (turn==1) {
        damage1 = 15;
        critical = Math.floor(Math.random() * (3 - 1)) + 1;
        if (critical==2) {
            damage1=40;
            health2 = health2 - damage1;

        } else {
            health2 = health2 - damage1;
        }
        healthBar(false);
        var elements = document.querySelectorAll('.player2Health');

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health2;
        }

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
            if (duel==0) {
                document.getElementById("riposte").style.display = "none";
            }
        }
        document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderLance.png";
        player2Animations(true);
        setTimeout(() => { 
            document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderIdle.gif";
            player2Animations(false);
        }, 1200);
        turn++;
        disableButtons(true,false);
    }
    checks();
}   