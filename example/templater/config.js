export default {
  "structure": [
    { 
      "group": "articulos",
      "elements": [
        "articulo",
        "articulo-variante",
        "articulo-link"
      ]
    },
    {
      "group": "usuarios",
      "elements": [
        "usuario",
        "usuario-tipo"
      ]
    }
  ],
  "templates": [
    { "name": "controller", "path": "example/templater/templates/controller.js" }, 
    { "name": "endpoint", "path": "example/templater/templates/endpoint.js" }, 
    { "name": "index", "path": "example/templater/templates/index.js" } 
  ],
  "outDir": "example/app"
}