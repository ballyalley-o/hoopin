import { NextFunction, Request, Response } from 'express'
import { CODE, Resp } from 'constant'
import { sourceService } from 'service/source.service'
import { Service } from './service.controller'

const TAG = 'Source.Controller'
export class SourceController {
    public static async getPlayerActiveAll(_req: Request, res: Response, _next: NextFunction): Promise<void> {
        try {
            const agents = await sourceService.getPlayerActiveAll()
            res.status(CODE.OK).json(Resp.Ok(agents, Array.isArray(agents) ? agents.length : undefined))
        } catch (error) {
            Service.catchError(error, TAG, 'getPlayerActiveAll', res)
        }
    }
    public static async getPlayerDetailAll(_req: Request, res: Response, _next: NextFunction): Promise<void> {
        try {
            const agents = await sourceService.getPlayerDetailAll()
            res.status(CODE.OK).json(Resp.Ok(agents, Array.isArray(agents) ? agents.length : undefined))
        } catch (error) {
            Service.catchError(error, TAG, 'getPlayerDetailAll', res)
        }
    }
    public static async getInjuredPlayerAll(_req: Request, res: Response, _next: NextFunction): Promise<void> {
        try {
            const agents = await sourceService.getPlayerInjuredAll()
            res.status(CODE.OK).json(Resp.Ok(agents, Array.isArray(agents) ? agents.length : undefined))
        } catch (error) {
            Service.catchError(error, TAG, 'getInjuredPlayerAll', res)
        }
    }
    public static async getAllStarAll(req: Request, res: Response, _next: NextFunction): Promise<void> {
        try {
            const { year } = req.body
            const yearRegex = /^\d{4}(PRE|POST|STAR)?$/
            if (!year || !yearRegex.test(year)) {
                res.status(CODE.BAD_REQUEST).json(Resp.Error('Invalid format; use YYYY, YYYYPRE, YYYYPOST or YYYYSTAR', CODE.BAD_REQUEST))
                return
            }

            const agents   = await sourceService.getAllStarAll(year)
            res.status(CODE.OK).json(Resp.Ok(agents, Array.isArray(agents) ? agents.length : undefined))
        } catch (error) {
            Service.catchError(error, TAG, 'getAllStarAll', res)
        }
    }
    public static async getFreeAgents(_req: Request, res: Response, _next: NextFunction) {
        try {
            const agents = await sourceService.getFreeAgents()
            res.status(CODE.OK).json(Resp.Ok(agents, Array.isArray(agents) ? agents.length : undefined))
        } catch (error) {
            Service.catchError(error, TAG, 'getFreeAgents', res)
        }
    }
}
