const ballons = document.querySelectorAll(".ballon")
const xBallon = document.querySelectorAll(".x-ballon")
const bx = document.querySelector(".bx")

let idx = 0


bx.addEventListener("click", () => {
    xBallon.forEach(el => {
        el.src = "./images/standard_white.gif"
    })
    idx = 0
})

ballons.forEach(el => {
    el.addEventListener("click", (event) => {
        xBallon[idx].src = event.target.src
        idx++
    })
})
xBallon.forEach(el=>{
    ballons.forEach(element=>{
        el.addEventListener("click", (event) => {
            event.target.src = xBallon[idx].src
            idx++
        })
    })
})


el.addEventListener("click", (event) => {
    event.target.src = xBallon[idx].src
    idx++
})

