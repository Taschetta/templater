import useTemplater from './templater.js'

const templater = useTemplater({
  structure: [
    { 
      group: "articulos",
      elements: [
        "articulo",
        "articulo-variante",
        "articulo-link",
      ]
    },
    {
      group: "usuarios",
      elements: [
        "usuario",
        "usuario-tipo"
      ]
    }
  ],
  templates: [
    { name: 'controller', path: './templates/controller' }, 
    { name: 'endpoint', path: './templates/endpoint' }, 
    { name: 'routes', path: './templates/routes' } 
  ],
  outDir: 'test'
})

templater.generate()