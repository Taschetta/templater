import { InvalidTemplateError } from './templater-errors.js'

import fs from 'fs'
import useCaser, { Caser } from '@taschetta/caser'

interface Template { name: string, route: string }
const templates = [
  { name: 'controller', route: './templates/controller' }, 
  { name: 'endpoint', route: './templates/endpoint' }, 
  { name: 'routes', route: './templates/routes' }
]

export default function useTemplater({ name, templateName, outDir }: {
  name: string,
  templateName: string,
  outDir: string,
}) {
  let caser: Caser
  let template: Template
  
  const getTemplate = () => {
    const template = templates.find(t => t.name == templateName)
    if(!template) throw new InvalidTemplateError(templateName)
    return template
  } 

  const generate = () => {
    fs.mkdirSync(`${outDir}/${caser.kebab}`, { recursive: true })
    
    let templateData = fs.readFileSync(template.route, 'utf8')
    templateData = templateData.replace(/{{ camel }}/g, caser.camel)
    templateData = templateData.replace(/{{ kebab }}/g, caser.kebab)
    templateData = templateData.replace(/{{ pascal }}/g, caser.pascal)
    templateData = templateData.replace(/{{ snake }}/g, caser.snake)
    
    fs.writeFileSync(`${outDir}/${caser.kebab}/${caser.kebab}-${template.name}`, templateData)
  }
  
  caser = useCaser(name)
  template = getTemplate()

  return {
    generate
  }
}

const templater = useTemplater({ name: 'test-template', templateName: 'endpoint', outDir: './test' })

templater.generate()