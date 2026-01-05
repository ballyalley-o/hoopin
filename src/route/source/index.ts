import { Application, Router } from 'express'
import { MODULE } from 'config/dir'
import { combine } from 'utility'

import sportsDataRoute from './sportsdata'

const router = Router({ mergeParams: true })

export const linkSourceRoute = (app: Application, apiVer: string) => {
    const base = combine(apiVer, MODULE.SOURCE)
    router.use(combine('sportsdata'), sportsDataRoute)

    app.use(base, router)
}