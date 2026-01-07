import { Router } from 'express'
import { SourceController } from 'controller/source.controller'
import { asyncHandler } from 'middleware'

const router = Router({ mergeParams: true })

router.get('/freeagent', SourceController.getFreeAgents)
router.get('/player-active-all', SourceController.getPlayerActiveAll)
router.get('/player-detail-all', SourceController.getPlayerDetailAll)
router.get('/player-injured-all', SourceController.getInjuredPlayerAll)
router.get('/allstar-all', SourceController.getAllStarAll)

export default router
