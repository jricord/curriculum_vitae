function animateMenu(){
    document.querySelector("button").addEventListener("click", menuToggle);

}

function menuToggle(){

    if(document.querySelector("ul").className==="active"){
document.querySelector("ul").className="";
    } else {
        document.querySelector("ul").className="active";
    }
   
}

animateMenu()
