let health1 = 100;
let health2 = 100;
let damage1 = Math.floor(Math.random() * (20 - 10)) + 10;
let damage2 = Math.floor(Math.random() * (20 - 10)) + 10;
let turn = 1;
let armor = 0;
let cryLimit = 2;
let critical;
let markLimit2 = 0;
let markLimit = 0;
let finishLimit = 1;
let duel = 0;
let bleed = 0;
let bleed2 = 0;
let player1 = "";
let player2 = "";
let move1 = "";
let move2 = "";
let healAmount = 0;
let help = false;
var healthchange;
var elements = document.querySelectorAll('.player2Health');

// Loop through NodeList and change innerHTML
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Health: " + health2;
}
function onLoad() {
    document.getElementById("crusader").style.display = "none";
    document.getElementById("bountyHunter").style.display = "none";
    document.getElementById("houndmaster").style.display = "none";
    document.getElementById("highwayman").style.display = "none";
    document.getElementById("status1").style.display = "none";
    document.getElementById("status2").style.display = "none";
    document.getElementById("status3").style.display = "none";
    document.getElementById("status4").style.display = "none";
    document.getElementById("status5").style.display = "none";
    document.getElementById("status6").style.display = "none";
    document.getElementById("status7").style.display = "none";
    document.getElementById("status8").style.display = "none";
    document.getElementById("riposte").style.display = "none";
    document.getElementById("guard").style.display = "none";
    document.getElementById("howtoplayStyles").style.display = "none";
    document.getElementById("turnsOutput").style.display = "none";
    document.getElementById("bountyHunterAnim").style.transform = "scaleX(-1)";
    document.getElementById("highwaymanAnim").style.transform = "scaleX(-1)";
}
function howtoplay() {
    if (help==false) {
        document.getElementById("howtoplayStyles").style.display = "block";
        help=true;
    } else if (help==true) {
        document.getElementById("howtoplayStyles").style.display = "none";
        help=false;
    }
}
function duelistCheck() {
    if (duel>0) {
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
}
function player1Animations(x) {
    if (x==true) {
        if (player1=="crusader") {
            document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderDefend.png";
        } else if (player1=="houndmaster") {
            document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterDefend.png";
        }
    } else if (x==false) {
        if (player1=="crusader") {
            document.getElementById("crusaderAnim").src = "images/characters/crusader/crusaderIdle.gif";
        } else if (player1=="houndmaster") {
            document.getElementById("houndmasterAnim").src = "images/characters/houndmaster/houndMasterIdle.gif";
        }
    }
}
function player2Animations(x) {
    if (x==true) {
        if (player2=="bountyhunter") {
            document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterDefending.png";
        } else if (player2=="highwayman") {
            if (duel>0) {
                document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanAttack.png";
            } else {
                document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanDefend.png";
            }
        }
    } else if (x==false) {
        if (player2=="bountyhunter") {
            document.getElementById("bountyHunterAnim").src = "images/characters/bountyHunter/bountyHunterIdle.gif";
        } else if (player2=="highwayman") {
            document.getElementById("highwaymanAnim").src = "images/characters/highwayman/highwaymanIdle.gif";
        }
    }
}
function disableButtons(a,b) {
    document.getElementById("smite").disabled = a;
    document.getElementById("defend").disabled = a;
    document.getElementById("inspiringCry").disabled = a;
    document.getElementById("lance").disabled = a;


    document.getElementById("houndRush").disabled = a;
    document.getElementById("lickWounds").disabled = a;
    document.getElementById("blackjack").disabled = a;
    document.getElementById("targetWhistle").disabled = a;


    document.getElementById("collectBounty").disabled = b;
    document.getElementById("finishHim").disabled = b;
    document.getElementById("markForDeath").disabled = b;
    document.getElementById("caltrops").disabled = b;

    document.getElementById("wickedSlice").disabled = b;
    document.getElementById("duelistAdvance").disabled = b;
    document.getElementById("pointBlank").disabled = b;
    document.getElementById("openVein").disabled = b;
}
function checks() {
    if (bleed>0) {
        bleed = bleed - 1;
        document.getElementById("status2").title = "This player will bleed 15 damage for " + bleed + " round(s).";
        document.getElementById("status6").title = "This player will bleed 15 damage for " + bleed + " round(s).";
        health1=health1-15;
        elements = document.querySelectorAll('.player1Health');

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health1;
        }
        if (bleed==0) {
            document.getElementById("status2").style.display = "none";
            document.getElementById("status6").style.display = "none";
        }
    }
    if (markLimit>0) {
        markLimit = markLimit - 1;
    } else if (markLimit==0) {
        document.getElementById("status1").style.display = "none";
    }
}
function healthBar(x) {
    if (x==true) {
        let nodeList = document.querySelectorAll(".healthImages1");
        if (health1==100) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health100.png";
            }
        } else if (health1<=100 && health1>=90) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health90.png";
            }
        } else if (health1<=90 && health1>=70) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health80.png";
            }
        } else if (health1<=70 && health1>=60) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health70.png";
            }
        } else if (health1<=60 && health1>=50) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health60.png";
            }
        } else if (health1<=50 && health1>=40) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health50.png";
            }
        } else if (health1<=40 && health1>=30) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health40.png";
            }
        } else if (health1<=30 && health1>=1) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health30.png";
            }
        }
    } else if (x==false) {
        let nodeList = document.querySelectorAll(".healthImages2");
        if (health2==100) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health100.png";
            }
        } else if (health2<=100 && health2>=90) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health90.png";
            }
        } else if (health2<=90 && health2>=70) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health80.png";
            }
        } else if (health2<=70 && health2>=60) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health70.png";
            }
        } else if (health2<=60 && health2>=50) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health60.png";
            }
        } else if (health2<=50 && health2>=40) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health50.png";
            }
        } else if (health2<=40 && health2>=30) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health40.png";
            }
        } else if (health2<=30 && health2>=1) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].src = "images/healthstages/health30.png";
            }
        }
    }
    if (health1<=0) {
        disableButtons(true,true);
        document.getElementById("turnsOutput").innerHTML = "PLAYER 2 WINS";
        nodeList = document.querySelectorAll(".healthImages2");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].src = "images/healthstages/health0.png";
        }
        disableButtons(true,true);
    } else if (health2<=0) {
        disableButtons(true,true);
        document.getElementById("turnsOutput").innerHTML = "PLAYER 1 WINS";
        nodeList = document.querySelectorAll(".healthImages2");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].src = "images/healthstages/health0.png";
        }
    }
}
function bleedcheck2() {
    if (bleed2>0) {
        bleed2 = bleed2 - 1;
        elements = document.querySelectorAll(".status8");

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].title = "This player will bleed 15 damage for " + bleed2 + " round(s).";
        }
        health2=health2-15;
        elements = document.querySelectorAll('.player2Health');

        // Loop through NodeList and change innerHTML
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Health: " + health2;
        }
        if (bleed2==0) {
            document.getElementById("status8").style.display = "none";
        }
    }
}
function wincheck() {
    if (health1<=0) {
        document.getElementById("turnsOutput").innerHTML = "PLAYER 2 WINS";
        disableButtons(true,true);
    } else if (health2<=0) {
        document.getElementById("turnsOutput").innerHTML = "PLAYER 1 WINS";
        disableButtons(true,true);
    }

}