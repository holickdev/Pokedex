// debugger/helpers.js
// Funciones de apoyo para el panel visual del depurador.
// Este archivo no tiene nada que ver con el Fetch en sí.

function activarLinea(id) {
    document.querySelectorAll('.linea').forEach(l => l.classList.remove('activa'));
    document.getElementById(id)?.classList.add('activa');
}

function completarLinea(id) {
    const linea = document.getElementById(id);
    linea?.classList.remove('activa');
    linea?.classList.add('completada');
}

function actualizarMonitor(id, texto, estado = 'vivo') {
    const mon = document.getElementById(id);
    if (!mon) return;
    mon.textContent = texto;
    mon.className = `monitor ${estado}`;
}

function resetearDepurador() {
    document.querySelectorAll('.linea').forEach(l => l.classList.remove('activa', 'completada'));
    document.querySelectorAll('.monitor').forEach(m => {
        m.textContent = '—';
        m.className = 'monitor';
    });
}
