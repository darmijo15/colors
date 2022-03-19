const colorButton = document.querySelector("#change-color");
const color = document.querySelector("#color");

colorButton.addEventListener('click', function() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    color.innerHTML = `Color: rgb(${red}, ${green}, ${blue})`;
})
