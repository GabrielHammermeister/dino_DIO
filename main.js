const dino = document.querySelector(".dino")

dino

function handleKeyUp(event) {

    if(event.keyCode === 32){
        console.log("espaco")
    }

}

document.addEventListener("keyup", handleKeyUp);
