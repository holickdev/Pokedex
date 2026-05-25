// Escuchamos cuando el usuario envía el formulario de búsqueda
document.getElementById('formularioBusqueda').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitamos que la página se recargue por defecto

    // 1. Obtenemos el nombre que el usuario escribió en la caja de texto
    const nombre = document.getElementById('entradaBusqueda').value.toLowerCase();

    // 2. Realizamos la petición HTTP (Request) al servidor de PokeAPI
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    // 3. Convertimos los datos crudos recibidos en un objeto JSON interactivo
    const datos = await respuesta.json();

    // 4. Actualizamos la interfaz de usuario con la información obtenida
    document.getElementById('nombrePokemon').innerText = datos.name;
    document.getElementById('imagenPokemon').src = datos.sprites.front_default;
});
