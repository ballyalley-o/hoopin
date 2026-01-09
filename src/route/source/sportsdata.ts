import { Router } from 'express'
import { SourceController } from 'controller/source.controller'
import { protect } from 'middleware'

const router = Router({ mergeParams: true })

router.get('/player-active-all', protect, SourceController.getPlayerActiveAll)
router.get('/player-detail-all', protect, SourceController.getPlayerDetailAll)
router.get('/player-injured-all', protect, SourceController.getInjuredPlayerAll)
router.get('/player-all-by-team', protect, SourceController.getPlayerAllByTeam)

router.get('/team-all', protect, SourceController.getTeamAll)
router.get('/team-active-all', protect, SourceController.getTeamActiveAll)

router.get('/score-all-by-date', protect, SourceController.getScoreAllByDate)
router.get('/score-all-by-date-final', protect, SourceController.getScoreAllByDateFinal)

router.get('/boxscore-all-by-date-final', protect, SourceController.getBoxscoreAllByDateFinal)

router.get('/allstar-all', protect, SourceController.getAllStarAll)
router.get('/schedule', protect, SourceController.getScheduleAll)
router.get('/standing', protect, SourceController.getStanding)
router.get('/news', protect, SourceController.getNewsAll)
router.get('/freeagent', protect, SourceController.getFreeAgents)

export default router
