import { Application, Router } from 'express'
import { MODULE } from 'config/dir'
import { combine } from 'utility'
import playerRoute from './player'
import teamRoute from './team'
import lineupRoute from './lineup'
import simRoute from './sim'
import tradeRoute from './trade'

const router = Router({ mergeParams: true })

export const linkGameRoute = (app: Application, apiVer: string) => {
  const base = combine(apiVer, MODULE.GAME)
  router.use(combine('player'), playerRoute)
  router.use(combine('team'), teamRoute)
  router.use(combine('lineup'), lineupRoute)
  router.use(combine('games'), simRoute)
  router.use(combine('trades'), tradeRoute)

  app.use(base, router)
}

export default router
