const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.post('/guardar-informacion', (req, res) => {
  const data = req.body

  if (!data.nombre || !data.cedula || !data.telefono) {
    res.status(400).send('Los campos Nombre, Cédula y Teléfono son requeridos')
    return
  }

  // Leer el archivo JSON actual
  let jsonData = []
  try {
    const jsonString = fs.readFileSync('./data.json', 'utf8')
    jsonData = JSON.parse(jsonString)
  } catch (error) {}

  // Agregar la nueva información al archivo JSON
  jsonData.push(data)

  // Escribir el archivo JSON actualizado
  fs.writeFileSync('./data.json', JSON.stringify(jsonData))

  res.send('La información ha sido guardada correctamente <a href="/">Regresar</a>'  )
})

app.get('/informacion', (req, res) => {
  // Leer el archivo JSON actual
  let jsonData = []
  try {
    const jsonString = fs.readFileSync('./data.json', 'utf8')
    jsonData = JSON.parse(jsonString)
  } catch (error) {}

  res.json(jsonData)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}, status: ok`)
})
