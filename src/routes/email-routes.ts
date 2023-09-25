import fastify, { FastifyInstance } from 'fastify'
import { createEmail } from '../controllers/email-controller'

export const emailRoutes = (fastify: FastifyInstance, options: any, done: () => void) => {
  fastify.get('/emails', createEmail)

  done()
}
