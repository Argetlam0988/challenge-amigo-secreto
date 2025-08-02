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

    // Agregar nombre al arreglo
    amigos.push(nombre);

    // Limpiar campo de entrada
    input.value = "";

    // Mostrar la lista actualizada
    mostrarLista();
}