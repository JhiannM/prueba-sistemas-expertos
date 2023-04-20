function cargarDatos () {
  // Hacer una solicitud GET al servidor para obtener los datos del archivo JSON
  console.log('Cargando...')
  fetch('http://localhost:3000/informacion')
    .then(response => response.json())
    .then(datos => {
      // Obtener una referencia al cuerpo de la tabla
      const tbody = document.querySelector('#datos tbody')

      // Vaciar el cuerpo de la tabla
      tbody.innerHTML = ''

      // Para cada objeto en el archivo JSON, crear una nueva fila en la tabla
      datos.forEach(dato => {
        const row = document.createElement('tr')

        const nombre = document.createElement('td')
        nombre.textContent = dato.nombre
        row.appendChild(nombre)

        const cedula = document.createElement('td')
        cedula.textContent = dato.cedula
        row.appendChild(cedula)

        const telefono = document.createElement('td')
        telefono.textContent = dato.telefono
        row.appendChild(telefono)

        tbody.appendChild(row)
      })
    })
}

// Llamar la función para cargar los datos al cargar la página
window.addEventListener('load', cargarDatos)
