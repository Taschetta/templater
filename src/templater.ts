import fs from 'fs'
import parseStructure, { StructureIn, Element } from './templater-structure.js'
import parseTemplates, { Template } from './templater-templates.js'

export default function useTemplater(params: {
  structure: StructureIn,
  templates: Template[],
  outDir: string,
}) {
  const outDir = params.outDir
  const structure = parseStructure(params.structure)
  const templates = parseTemplates(params.templates)
  
  const getPathDir = ({ element }: {
    element: Element,
  }) => {
    return (element.group) 
      ? `${outDir}/${element.group}/${element.name.kebab}`
      : `${outDir}/${element.name.kebab}`
  }

  const getPathFile = ({ pathDir, element, template }: {
    pathDir: string,
    element: Element
    template: Template
  }) => {
    const filename = `${element.name.kebab}-${template.name}`
    return `${pathDir}/${filename}`
  }
  
  const generate = () => {
    structure.forEach(element => {
      const pathDir = getPathDir({ element })
      fs.mkdirSync(pathDir, { recursive: true })
      
      templates.forEach(template => {
        const pathFile = getPathFile({ pathDir, element, template })        
        console.log(pathFile)
        
        let templateData = fs.readFileSync(template.path, 'utf8')

        templateData = templateData.replace(/{{ camel }}/g, element.name.camel)
        templateData = templateData.replace(/{{ kebab }}/g, element.name.kebab)
        templateData = templateData.replace(/{{ pascal }}/g, element.name.pascal)
        templateData = templateData.replace(/{{ snake }}/g, element.name.snake)
        
        fs.writeFileSync(pathFile, templateData)      
      });      
    });
  }

  return {
    generate
  }
}