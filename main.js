let open = false 
const modalElement = document.querySelector("#modalAtendimento")
function modal(){
    if(!open){
        modalElement.setAttribute("class", "open")
    }
    else{
        modalElement.removeAttribute("class")
    }
    open = !open
}