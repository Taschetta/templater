
export class InvalidTemplateError extends Error {
  constructor(template: string) {
    super(`'${template}' is not a valid template.`)
    this.name = 'InvalidTemplateError'
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidTemplateError)
    }
  }
}