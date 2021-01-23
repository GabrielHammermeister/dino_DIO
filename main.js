const dino = document.querySelector('.dino')
const background = document.querySelector(".background")

let isJumping = false

function handleKeyUp(event) {

    if(event.keyCode === 32){
        if(!isJumping){
            jump()
        }
    }

}
function createCactus() {

    const cactus = document.createElement('div')


    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)
}

function jump() {
    isJumping = true
    let position = 0

    let upInterval = setInterval(()=> {
        
        if(position >= 150) {
            clearInterval(upInterval)

            let downInterval = setInterval(() => {

                if(position <= 0) {
                    isJumping = false
                    clearInterval(downInterval)
                } else {
                    position -= 20
                    dino.style.bottom = position + 'px'
                }

            }, 15)

        } else {
            position += 20
            dino.style.bottom = position + 'px'
        }


    }, 15)

}

createCactus()
document.addEventListener("keyup", handleKeyUp);
