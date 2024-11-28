import dotenv from 'dotenv'
import Fastify, { FastifyInstance } from 'fastify'
import firstRoute from './survey'

dotenv.config()

const fastify: FastifyInstance = Fastify({ logger: true })

fastify.register(firstRoute)

fastify.listen(
  { port: 3000 },
  function (err, _address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  },
)
