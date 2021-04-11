import use$pascal$Controller from './$kebab$-controller.js'

export default function use$pascal$Endpoint() {
  const $camel$Controller = use$pascal$Controller()

  const hello = () => $camel$Controller.display('hello')
  const world = () => $camel$Controller.display('world')

  return {
    hello,
    world,
  }  
}