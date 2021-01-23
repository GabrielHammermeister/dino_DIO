const dino = document.querySelector('.dino')
const background = document.querySelector(".background")

let isJumping = false
let position = 0

function handleKeyUp(event) {

    if(event.keyCode === 32){
        if(!isJumping){
            jump()
        }
    }

}
function createCactus() {

    const cactus = document.createElement('div')
    let cactusPosition = 1750
    let random = Math.random()*6000


    cactus.classList.add('cactus')
    cactus.style.left = cactusPosition + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        
        if(cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if(0 < cactusPosition && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval)
            document.body.innerHTML = "<h1 class='game-over'>Game Over</h1>"
        } else {
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'
        }

    }, 20)

    setTimeout(createCactus, random)

}

function jump() {
    isJumping = true
    

    let upInterval = setInterval(()=> {
        
        if(position >= 200) {
            clearInterval(upInterval)

            let downInterval = setInterval(() => {

                if(position <= 0) {
                    isJumping = false
                    clearInterval(downInterval)
                } else {
                    position -= 20
                    dino.style.bottom = position + 'px'
                }

            }, 20)

        } else {
            position += 20
            dino.style.bottom = position + 'px'
        }


    }, 15)

}

createCactus()
document.addEventListener("keyup", handleKeyUp);
