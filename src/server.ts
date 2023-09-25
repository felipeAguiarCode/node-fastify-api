import fastify from 'fastify'

export default function buildServer() {
  const server = fastify({
    logger: true,
  })

  return server
}
