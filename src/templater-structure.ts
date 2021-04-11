import useCaser, { Caser } from '@taschetta/caser'

export interface Element { group: string | undefined, name: Caser }
export type StructureIn = Array<string | { group: string, elements: string[] }>
export type StructureOut = Array<Element>

export default function parseStructure(structure_in: StructureIn): StructureOut {  
  const structure_out: StructureOut = []
  
  structure_in.forEach(structure_item => {
    if(typeof structure_item == 'string') { 
      structure_out.push({ group: undefined, name: useCaser(structure_item) }) 
    }
    else {
      structure_item.elements.forEach(structure_group_element => {
        structure_out.push({ 
          group: structure_item.group, 
          name: useCaser(structure_group_element) 
        })
      });
    }
  });

  return structure_out  
}