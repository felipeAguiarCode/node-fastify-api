import buildServer from './server'
import { emailRoutes } from './routes/email-routes'

const server = buildServer()
const PORT = 3333

async function main() {
  try {
    server.register(emailRoutes, { prefix: 'api/v1' })

    await server.listen({
      port: PORT,
    })

    console.log(`⭐Server  listen on http://localhost:${PORT}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
