import { Router } from 'express'
import { SourceController } from 'controller/source.controller'
import { asyncHandler } from 'middleware'

const router = Router({ mergeParams: true })

router.get('/player-active-all', SourceController.getPlayerActiveAll)
router.get('/player-detail-all', SourceController.getPlayerDetailAll)
router.get('/player-injured-all', SourceController.getInjuredPlayerAll)
router.get('/player-all-by-team', SourceController.getPlayerAllByTeam)

router.get('/team-all', SourceController.getTeamAll)
router.get('/team-active-all', SourceController.getTeamActiveAll)

router.get('/score-all-by-date', SourceController.getScoreAllByDate)
router.get('/score-all-by-date-final', SourceController.getScoreAllByDateFinal)

router.get('/boxscore-all-by-date-final', SourceController.getBoxscoreAllByDateFinal)

router.get('/allstar-all', SourceController.getAllStarAll)
router.get('/schedule', SourceController.getScheduleAll)
router.get('/standing', SourceController.getStanding)
router.get('/news', SourceController.getNewsAll)
router.get('/freeagent', SourceController.getFreeAgents)

export default router
