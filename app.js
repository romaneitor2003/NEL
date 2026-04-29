function cargar(idSeccion) {
  const secciones = document.querySelectorAll('.equipo-section');
  secciones.forEach(seccion => {
    seccion.classList.remove('active');
  });
  
  const seleccionada = document.getElementById(idSeccion);
  if (seleccionada) {
    seleccionada.classList.add('active');
    // Scroll suave hacia arriba para ver el contenido nuevo
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker registrado ✓'))
      .catch(err => console.error('Error SW:', err));
  });
}
