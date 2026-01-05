import { Application } from 'express'
import { linkAuthRoute } from 'route/auth'
import { linkGameRoute } from 'route/game'
import { linkSourceRoute } from 'route/source'

export const mainRoute = (app: Application, apiVer: string) => {
    linkAuthRoute(app, apiVer)
    linkGameRoute(app, apiVer)
    linkSourceRoute(app, apiVer)
}

export { default as ServerStatic } from './server-static'
