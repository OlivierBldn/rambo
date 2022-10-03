var previousLife = 0;
let initialLife = 100000;

function hpChange(agent){
    var pourcentHp = (agent.life / initialLife )*100
    console.log((pourcentHp), "%");
    if(pourcentHp <= 90 && pourcentHp > 80){
        document.getElementById("100").src="./Design/Coeur/Demi coeur.svg";
     }
     else if(pourcentHp <= 80 && pourcentHp > 70){
        document.getElementById("100").src="./Design/Coeur/Coeur vide.svg";
     }
     else if(pourcentHp <= 70 && pourcentHp > 60){
        document.getElementById("80").src="./Design/Coeur/Demi coeur.svg";
     }
     else if(pourcentHp <= 60 && pourcentHp > 50){
        document.getElementById("80").src="./Design/Coeur/Coeur vide.svg";
     }
     else if(pourcentHp <= 50 && pourcentHp > 40){
        document.getElementById("60").src="./Design/Coeur/Demi coeur.svg";
     }
     else if(pourcentHp <= 40 && pourcentHp > 30){
        document.getElementById("60").src="./Design/Coeur/Coeur vide.svg";
     }
     else if(pourcentHp <= 30 && pourcentHp > 20){
        document.getElementById("40").src="./Design/Coeur/Demi coeur.svg";
     }
     else if(pourcentHp <= 20 && pourcentHp > 10){
        document.getElementById("40").src="./Design/Coeur/Coeur vide.svg";
     }
     else if(pourcentHp <= 10 && pourcentHp > 0){
        document.getElementById("20").src="./Design/Coeur/Demi coeur.svg";
     }
     else if(pourcentHp == 0){
        document.getElementById("20").src="./Design/Coeur/Coeur vide.svg";
     }
}


/** Function to track the loading of the DOM */
function onAgentChange(agent) {
    if(previousLife != agent.life){
        document.querySelector("#test").classList.toggle("active");
        console.log("agent touché");
        previousLife = agent.life;
        
        console.log((agent.life),"HP");
         hpChange(agent);
    }

}



/** Fuction to generate random number between a min and max value */
function random(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
  }

function onAgentUpdate(agent){
    let rotation = document.getElementById('bonsoir')
    let dx = random(-1,1);
    let dy = random(-1,2);
    agent.move(dx,dy);
    if(agent.d === 0){
        agent.fire(false);
        document.getElementById("bonsoir").src="./Design/Rambo.svg";
    } else {
        agent.fire(true);
        document.getElementById("bonsoir").src="./Design/Rambotire.svg";
        console.log("TIR")
        console.log((agent.ammo),"Ammo");
        let ammonb = document.getElementById("ammo").innerHTML;
        document.getElementById("ammo").innerHTML = document.getElementById("ammo").innerHTML.replace(ammonb, agent.ammo);

    }
    if(agent.dir === 1 ){
        rotation.style.transform = "rotate(90deg)";
    } else if (agent.dir === 2){
        rotation.style.transform = "rotate(180deg)";
    } else if (agent.dir === 3){
        rotation.style.transform = "rotate(-90deg)";}
        else{
            rotation.style.transform = "rotate(0deg)";
        }
    
}



function onLoaded()
{

/** Getting the URL & parameters*/
    let href = window.location.href;
    let url = new URL(href);
    let agentId = url.searchParams.get('agentid');
    let readonly = url.searchParams.get('readonly');


    if (agentId === null) {
        console.log("missing agentid")
        return;
    }

    if (readonly === null) {
        console.log("missing readonly")
        return
    }
    if (readonly === "1"){
        readonly = true;
    }else {
        readonly = false;
    }

    console.log("Création de l'agent");
    

/** Instantiation of the agent object */

    let monAgent = new Agent(agentId, "demo", "demo", "iframebattlefx", 8080, "mqtt.jusdeliens.com", 2, readonly);

    monAgent.executeOnChange(onAgentChange);

    monAgent.connect();

    monAgent.executeOnUpdate(onAgentUpdate);



    console.log();
}

document.addEventListener('DOMContentLoaded', onLoaded);

// const queryString = window.location.search;
// console.log (queryString);

// const urlParams = new URLSearchParams (queryString);

// const id = urlParams .get ('agentid');
// console.log (id);

/**
* Fonction raccourci de "document.querySelector"
* @param {string} $elem: élément HTML à sélectionner
* @param {string} $index (facultatif): index d'un élément HTML particulier dans un tableau d'éléments HTML
* @return {JS}
*/

// function get($elem,$index='none'){

//     if($index==='none'){
//         if(document.querySelectorAll($elem).length > 1){
//         return document.querySelectorAll($elem)
//         }else{
//             return document.querySelector($elem)
//         }
//     }else{
//         return document.querySelectorAll($elem)[$index]
//     }	
// }

/**
 * Fonction raccourci de mise en place d'écouteurs d'événements sur plusieurs éléments HTML
 * @param {string} $elems: éléments HTML qui doivent recevoir les "listeners"
 * @param {string} $event: type d'événement (click, change, mouseleave, scroll,...)
 * @param {function} $fn: fonction de rappel
 * @return {function} fonction de rappel avec l'objet "event" (e)
 */

// function multipleEvents($elems,$event,$fn){

//     get($elems).forEach(elem=>{
//         elem.addEventListener($event, e=>{
//             return $fn(e)
//         })
//     })
// }