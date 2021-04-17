import useTemplater from './templater.js'
import minimist from 'minimist'
import path from 'path'

const args = minimist(process.argv.slice(2))

if(!args.config) {
  throw new Error('No config file provided')
}

const configPath = path.join('file://', process.cwd(), args.config)

const { config } = await import(configPath)

useTemplater(config).generate()