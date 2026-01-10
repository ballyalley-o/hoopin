import { Application, Router } from 'express'
import { MODULE } from 'config/dir'
import { combine } from 'utility'

import sportsDataRoute from './sportsdata'

const router = Router({ mergeParams: true })

export const linkFeedRoute = (app: Application, apiVer: string) => {
    const base = combine(apiVer, MODULE.FEED)
    router.use(combine('sportsdata'), sportsDataRoute)

    app.use(base, router)
}