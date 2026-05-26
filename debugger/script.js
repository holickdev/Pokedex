// debugger/script.js
// Es el mismo código de script.js, con llamadas al depurador entre cada paso.
// Las funciones activarLinea(), completarLinea(), etc. vienen de helpers.js

document.getElementById('formularioBusqueda').addEventListener('submit', async (event) => {
    event.preventDefault();
    resetearDepurador(); // Apagamos el panel antes de empezar

    // Paso 1: leer el input
    activarLinea('linea-1');
    const nombre = document.getElementById('entradaBusqueda').value.toLowerCase();
    actualizarMonitor('mon-nombre', `"${nombre}"`);
    document.getElementById('mon-url').textContent = `\`/pokemon/${nombre}\``;
    completarLinea('linea-1');

    // Paso 2: fetch al servidor
    activarLinea('linea-2');
    actualizarMonitor('mon-respuesta', 'esperando...');
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    actualizarMonitor('mon-respuesta', `${respuesta.status} ${respuesta.statusText}`, 'listo');
    completarLinea('linea-2');

    // Paso 3: convertir la respuesta a JSON
    activarLinea('linea-3');
    actualizarMonitor('mon-datos', 'parseando...');
    const datos = await respuesta.json();
    actualizarMonitor('mon-datos', `{ name: "${datos.name}", id: ${datos.id} }`, 'listo');
    completarLinea('linea-3');

    // Paso 4: actualizar el nombre en la pantalla
    activarLinea('linea-4');
    document.getElementById('nombrePokemon').innerText = datos.name;
    actualizarMonitor('mon-name', `"${datos.name}"`, 'listo');
    completarLinea('linea-4');

    // Paso 5: actualizar la imagen en la pantalla
    activarLinea('linea-5');
    document.getElementById('imagenPokemon').src = datos.sprites.front_default;
    actualizarMonitor('mon-src', 'sprite.png ✓', 'listo');
    completarLinea('linea-5');
});
