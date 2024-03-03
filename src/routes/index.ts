import { Router } from 'express'

import { baseRoutes } from '../routes/base.routes'

export const routes = Router()

routes.use('/', baseRoutes)

