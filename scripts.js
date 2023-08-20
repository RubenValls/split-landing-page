const playContainer = document.querySelector(".ps5-container");
const xboxContainer = document.querySelector(".xbox-container");

playContainer.addEventListener("mouseover", () => {
    playContainer.style.width = '70%';
    xboxContainer.style.width = '30%';
})

xboxContainer.addEventListener("mouseover", () => {
    playContainer.style.width = '30%';
    xboxContainer.style.width = '70%';
})