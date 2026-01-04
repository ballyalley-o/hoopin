import { Application } from 'express'
import userRoute from 'route/auth/user'
import authRoute from 'route/auth/auth'
import { MODULE } from 'config/dir'
import { combine } from 'utility'


export const linkAuthRoute = (app: Application, apiVer: string) => {
    app.use(combine(apiVer, MODULE.AUTH), authRoute)
    app.use(combine(apiVer, MODULE.AUTH, MODULE.USER), userRoute)
}