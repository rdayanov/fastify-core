import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { FastifyPluginOptions } from 'fastify/types/plugin'

async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions) {
  const opts: RouteShorthandOptions = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            pong: {
              type: 'string',
            },
          },
        },
      },
    },
  }

  fastify.get('/ping', opts, async (_request, _reply) => {
    return { pong: 'it reflecting!' }
  })

  fastify.get('/', {
    handler: (_request, _reply) => {
      return { hello: 'World' }
    },
    preHandler: (_, reply, done) => {
      reply.code(202)

      reply.header('x-shout-out-type', 'old')
      reply.header('x-shout-out', 'swag')

      done()
    },
  })
}

export default routes