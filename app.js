// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear el array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Ocultar mensaje de resultado previo
    resultado.innerHTML = "";

    // Agregar nombre al arreglo
    amigos.push(nombre);

    // Limpiar campo de entrada
    input.value = "";

    // Mostrar la lista actualizada
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista existente

    // Recorrer el array y agregar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

    // Asegurarnos de mostrar la lista si tiene elementos
    lista.style.display = amigos.length > 0 ? "block" : "none";
}

function sortearAmigo() {
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Por favor, añade al menos un amigo antes de sortear.</li>";
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;

    
    // Eliminar el nombre sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    // Ocultar la lista de amigos
    lista.style.display = "none";
}
