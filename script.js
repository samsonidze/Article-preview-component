const shareDiv = document.querySelector(".share-div")
const shareBtn = document.querySelector(".share")
const shareBtn2 = document.querySelector(".share-2")


shareBtn.addEventListener("click", () =>{
    shareDiv.classList.toggle("active")
    shareBtn.classList.toggle("active-btn")

    if(window.innerWidth <= 970){
        shareBtn.style.backgroundColor = "hsl(214, 17%, 81%)"
    }
    console.log("ss")
})


shareBtn2.addEventListener("click", () =>{
    shareDiv.classList.toggle("active")
    shareBtn2.classList.toggle("active-btn")

    if(window.innerWidth <= 970){
        shareBtn2.style.backgroundColor = "hsl(214, 17%, 81%)"
    }
    console.log("ss")
})


