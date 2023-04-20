# Prueba de conocimiento - explicación.

Este es un proyecto simple de registro de datos que utiliza una aplicación web construida con Express.js en el lado del servidor y HTML, CSS y JavaScript en el lado del cliente. Los datos se almacenan en un archivo JSON en el servidor y se pueden leer y escribir a través de solicitudes HTTP.

# Funcionamiento
Cuando se carga la página principal en el navegador, se realiza una solicitud HTTP GET al servidor para obtener los datos del archivo JSON y se muestran en una tabla en el HTML. El usuario puede agregar nuevos datos utilizando un formulario en la página y estos datos se envían al servidor a través de una solicitud HTTP POST. El servidor valida los datos y los agrega al archivo JSON. Después de agregar los datos, se muestra un mensaje de confirmación en la página y la tabla de datos se actualiza para mostrar los nuevos datos.

# Instalación
• Para ejecutar este proyecto, primero debe clonar el repositorio en su máquina local. 


• A continuación, debe instalar las dependencias del proyecto con el siguiente comando:
    npm install 
Luego, puede iniciar el servidor con el siguiente comando:
    npm start 
Esto iniciará el servidor en el puerto 3000.

# Tecnologías utilizadas
•	Express.js
•	HTML
•	CSS
•	JavaScript

# Estructura del proyecto

prueba-sistemas-expertos/
├── node_modules/
├── public/
│   ├── css/
│   │   ├── styles.css
│   ├── js/
│   │   ├── app.js
│   ├── views/
│   │   ├── index.html
├── package.json
├── package-lock.json
├── data.json
├── README.md
└── server.js

• public/: Este directorio contiene los archivos públicos del proyecto (HTML, CSS, JavaScript).
• public/views/index.html: Este archivo es la página principal del proyecto. Contiene el formulario de registro y la tabla para mostrar los datos.
• public/js/app.js: Este archivo contiene el código JavaScript que maneja las interacciones con el formulario y la tabla.
• server.js: Este archivo es el servidor Node.js que maneja las solicitudes HTTP y las operaciones de lectura/escritura del archivo JSON.
• data.json: Este archivo es el archivo JSON que almacena los datos guardados por los usuarios.

# Autor
Este proyecto fue creado por Jhiann Macias Vargas