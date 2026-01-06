import { NextFunction, Request, Response } from 'express'
import { CODE, Resp } from 'constant'
import { sourceService } from 'service/source.service'
import { Service } from './service.controller'

const TAG = 'Source.Controller'
export class SourceController {
    public static async getFreeAgents(_req: Request, res: Response, _next: NextFunction) {
        try {
            const agents = await sourceService.getFreeAgents()
            res.status(CODE.OK).json(Resp.Ok(agents, Array.isArray(agents) ? agents.length : undefined))
        } catch (error) {
            Service.catchError(error, TAG, 'getFreeAgents', res)
        }
    }
}
