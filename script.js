const mainContainerEl = document.querySelector(".main-container")
const thankYouConatinerEl = document.querySelector(".thank-you-container")
const sumbitButtonEl = document.querySelector(".btn-submit")

const ratingEl = document.getElementById("rating")
const ratingValues = document.querySelectorAll(".btn")


sumbitButtonEl.addEventListener("click", function(){
    thankYouConatinerEl.classList.remove("hidden")
    mainContainerEl.style.display = "none"
})

ratingValues.forEach((rate) => {
    rate.addEventListener("click", () => {
       ratingEl.innerHTML = rate.innerHTML
    })
}  )