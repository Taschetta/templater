import useTemplater from '../build/templater.js'
import config from './templater/config.js'

const templater = useTemplater(config)

templater.generate()