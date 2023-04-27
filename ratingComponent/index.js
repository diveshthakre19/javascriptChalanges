let starcontainer = document.querySelector(".star-section")
let star = document.querySelectorAll(".star")
let filled = 0

starcontainer.addEventListener("click", (e) => {
    let currClicked = e.target.dataset.index;

    for (let i = 0; i < filled; i++) {
        star[i].classList.remove("star-filled")
    }

    for (let i = 0; i < currClicked; i++) {
        star[i].classList.add("star-filled")
    }

    document.getElementById("counter").innerText = `Rating: ${currClicked}`

    filled = currClicked
})

starcontainer.addEventListener("mouseover", (e) => {
    let currClicked = e.target.dataset.index;


    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("star-filled")
    }

    for (let i = 0; i < currClicked; i++) {
        star[i].classList.add("star-filled")
    }

})

starcontainer.addEventListener("mouseleave", (e) => {


    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("star-filled")
    }

    for (let i = 0; i < filled; i++) {
        star[i].classList.add("star-filled")
    }

})