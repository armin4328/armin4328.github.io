

function collectBounty() {
    if (turn==2) {
        let damage2 = Math.floor(Math.random() * (30 - 20)) + 20;
        /*Player 2 move*/
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
        document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterAttack.png";
        player1Animations(true);
        setTimeout(() => { 
            document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterIdle.gif";
            player1Animations(false);
        }, 1200);

        /*button changes*/
        disableButtons(false,true);
        /*turn change*/

        turn--;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";

    }
    wincheck();
    bleedcheck2();
}

function finishHim() { 
    if (turn==2) {
        if (finishLimit==0) {
            document.getElementById("finishHim").disabled = true;
        } else if (finishLimit > 0) {
            if (markLimit>0) {
                damage2 = 50;
                finishLimit = finishLimit - 1;

            } else if (markLimit==0) {
                damage2 = 40;
                finishLimit = finishLimit - 1;
                
            }
            if (armor>0) {
                damage2 = damage2 - 20;
                health1 = health1 - damage2;
                armor=armor-1;
            } else {
                health1 = health1 - damage2;
                if (armor==0){
                    document.getElementById("guard").style.display = "none";
                }
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
            document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterAttack.png";
            player1Animations(true);
            setTimeout(() => { 
                document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterIdle.gif";
                player1Animations(false);
            }, 1200);
        
            /*button changes*/
            disableButtons(false,true);
            /*turn change*/
        
            turn--;
            document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
        }
        wincheck();
        bleedcheck2();
    }
}

function markForDeath() {
    if (turn==2) {
        markLimit = markLimit + 2;
        if (armor>0) {
            armor=armor-1;
            if (armor==0){
                document.getElementById("guard").style.display = "none";
            }
        } 
        if (player1=="crusader") {
            document.getElementById("status1").style.display = "inline";
        } else if (player1=="houndmaster") {
            document.getElementById("status5").style.display = "inline";
        }

        document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterMark.png";
        player1Animations(true);
        setTimeout(() => { 
            document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterIdle.gif";
            player1Animations(false);
        }, 1200);
        turn--;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
        disableButtons(false,true);
        wincheck();
        bleedcheck2();
    }
}
function caltrops() {
    if (turn==2) {
        bleed=bleed+3;
        if (armor>0) {
            armor=armor-1;
            if (armor==0){
                document.getElementById("guard").style.display = "none";
            }
        } 
        if (player1=="crusader") {
            document.getElementById("status2").style.display = "inline";
            document.getElementById("status2").title = "This player will bleed 15 damage for " + bleed + " round(s).";
        } else if (player1=="houndmaster") {
            document.getElementById("status6").style.display = "inline";
            document.getElementById("status6").title = "This player will bleed 15 damage for " + bleed + " round(s).";
        }
        healthBar(true);
        document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterCaltrops.png";
        player1Animations(true);
        setTimeout(() => { 
            document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterIdle.gif";
            player1Animations(false);
        }, 1200);
        turn--;
        document.getElementById("turnsOutput").innerHTML = "PLAYER " + turn + "S TURN";
        disableButtons(false,true);
        wincheck();
        bleedcheck2();
    }
}