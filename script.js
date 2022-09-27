
/** Function to track the loading of the DOM */

function onAgentChange (agent) {
    console.log(agent.x);
}

function onLoaded()
{
/** Getting the URL & parameters*/
    let href = window.location.href;
    let url = new URL(href);
    let agentId = url.searchParams.get('agentid');
    let readOnly = url.searchParams.get('readonly');


    if (agentId === null) {
        console.log("missing agentid")
        return;
    }

    if (readOnly === null) {
        console.log("missing readonly")
        return
    }

    console.log("Création de l'agent");

/** Instantiation of the agent object */

    let monAgent = new Agent(agentId, "demo", "demo", "iframebattlefx", 8080, "mqtt.jusdeliens.com", 4, readonly);

    monAgent.executeOnChange(onAgentChange);

    monAgent.connect();

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