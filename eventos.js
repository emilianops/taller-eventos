let divsaludar = document.querySelector("div");
let btn = document.querySelector("button");

divsaludar.addEventListener('click', () => {
    alert("¡Hola! Soy un div");
});

function saludar(){
    alert('¡Hola! Soy un botón.');
}

btn.onclick = saludar;
