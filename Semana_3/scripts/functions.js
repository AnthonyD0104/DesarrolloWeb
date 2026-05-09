
let clicks = 0;
let tareas = [];

function calcularDoble() {
    const numero = parseFloat(document.getElementById('numero').value);
    if (isNaN(numero)) {
        document.getElementById('resultado').textContent = 'Por favor, ingrese un numero valido.';
        return;
    }
    const doble = numero * 2;
    document.getElementById('resultado').textContent = `El doble de ${numero} es ${doble}`;
}

function esPalindromo() {
    const numero = document.getElementById("numero").value;
    const numeroStr = numero.toString();
    const numeroReverso = numeroStr.split("").reverse().join("");
    if (numero.trim() === "") {
        document.getElementById("resultado").textContent = "Por favor, ingrese un numero";
        return;
    }
    if (numeroStr === numeroReverso) {
        document.getElementById("resultado").textContent = `${numero} es un número palíndromo.`;
    } else {
        document.getElementById("resultado").textContent = `${numero} no es un número palíndromo.`;
    }
}

function contadorClicks() {
    clicks++;
    document.getElementById("resultado").textContent = `Has hecho ${clicks} clicks.`;
}

function agregarTareas() {
    const tarea = document.getElementById("tareas").value;
    if (!tarea) {
        document.getElementById("mensaje").textContent = "Por favor, ingrese una tarea.";
        return;
    }
    tareas.push(tarea);
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    tareas.forEach((t) => {
        const item = document.createElement('li');
        item.className = "list-group-item";
        item.textContent = t;
        lista.appendChild(item);

    });
    document.getElementById("mensaje").textContent = "";
}