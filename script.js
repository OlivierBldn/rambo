function get($elem,$index='none'){
    
    if($index==='none'){
        if(document.querySelectorAll($elem).length > 1){
        return document.querySelectorAll($elem)
        }else{
            return document.querySelector($elem)
        }
    }else{
        return document.querySelectorAll($elem)[$index]
    }	
}

function multipleEvents($elems,$event,$fn){

    get($elems).forEach(elem=>{
        elem.addEventListener($event, e=>{
            return $fn(e)
        })
    })
}
