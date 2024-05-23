
const getYear = () => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
      yearSpan.textContent = currentYear;
    }
}
// Footer date
document.addEventListener("DOMContentLoaded", getYear)

// Pill buttons for service page.
const homeBlock = document.getElementById("home-insurance-detail");
const autoBlock = document.getElementById("auto-insurance-detail");
const businessBlock = document.getElementById("business-insurance-detail")

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("home-btn").click();
})

document.getElementById("home-btn").addEventListener("click", ()=>{
    autoBlock.style.display = "none"
    businessBlock .style.display = "none"
    homeBlock.style.display = "block"
    document.getElementById("home-btn").style.backgroundColor = "white"
    document.getElementById("home-btn").style.color = "#fab448"

    document.getElementById("auto-btn").style.backgroundColor = "transparent"
    document.getElementById("auto-btn").style.color = "#000"

    document.getElementById("business-btn").style.backgroundColor = "transparent"
    document.getElementById("business-btn").style.color = "#000"

})
document.getElementById("auto-btn").addEventListener("click", ()=>{
    homeBlock.style.display = "none"
    businessBlock .style.display = "none"
    autoBlock.style.display = "block"
    document.getElementById("auto-btn").style.backgroundColor = "white"
    document.getElementById("auto-btn").style.color = "#fab448"

    document.getElementById("home-btn").style.backgroundColor = "transparent"
    document.getElementById("home-btn").style.color = "#000"

    document.getElementById("business-btn").style.backgroundColor = "transparent"
    document.getElementById("business-btn").style.color = "#000"
})
document.getElementById("business-btn").addEventListener("click", ()=>{
    autoBlock.style.display = "none"
    homeBlock.style.display = "none"
    businessBlock.style.display = "block"
    document.getElementById("business-btn").style.backgroundColor = "white"
    document.getElementById("business-btn").style.color = "#fab448"

    document.getElementById("home-btn").style.backgroundColor = "transparent"
    document.getElementById("home-btn").style.color = "#000"

    document.getElementById("auto-btn").style.backgroundColor = "transparent"
    document.getElementById("auto-btn").style.color = "#000"
})