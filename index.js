const images = document.querySelectorAll(".hero-img")



images.forEach((image,index) => {
    image.addEventListener("mouseover", () => {
        const container = document.querySelector(`.content-container-${index + 1}`)
        container.classList.remove("hide")
        container.classList.add("show")
    })
})

images.forEach((image,index) => {
    image.addEventListener("mouseout", () => {
        const container = document.querySelector(`.content-container-${index + 1}`)
        container.classList.remove("show")
        container.classList.add("hide")
    })
})