import { FastifyRequest, FastifyReply } from 'fastify'

export const createEmail = async (request: FastifyRequest, reply: FastifyReply) => {
  const { dado } = request.query as { dado?: string }

  const responseData = {
    name: dado,
  }

  return responseData
}
