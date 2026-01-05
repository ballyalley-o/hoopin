import { Router } from 'express'
import { SourceController } from 'controller/source.controller'

const router = Router({ mergeParams: true })

router.get('/freeagent', SourceController.getFreeAgents)

export default router