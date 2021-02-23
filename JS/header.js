const header = document.querySelector("header")

const toggleHeader = function() {
    const pixels = window.pageYOffset

    if(pixels > 60) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
}

const fadeBox = function() {
    const pixels = window.pageYOffset

    const alpha = Math.min(pixels / 500, 0.5)

    header.style.boxShadow = `0 0 10px rgba(0,0,0, ${alpha})`
}

fadeBox()
toggleHeader()

document.addEventListener("scroll", function() {
    toggleHeader()
    fadeBox()
  })