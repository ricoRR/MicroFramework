window.onload = () => {
    
    let zero = document.getElementById("zero")
    let trois = document.getElementById("trois")
    let cinq= document.getElementById("cinq")

    zero.addEventListener("click", ()=> {
        trois.toggleAttribute("disabled")
        cinq.toggleAttribute("disabled")
    })
}