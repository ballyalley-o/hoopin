import { NextFunction, Request, Response } from 'express'
import { CODE, Resp, RESPONSE } from 'constant'
import { ErrorResponse } from 'middleware'
import { sourceService } from 'service/source.service'

import { Service } from './service.controller'

const TAG = 'Source.Controller'
export class SourceController {
    public static async getFreeAgents(_req: Request, res: Response, _next: NextFunction) {
        try {
            res.status(CODE.OK).json(res.advanceResult)
        } catch (error) {
            Service.catchError(error, TAG, 'getFreeAgents', res)
        }
    }
}