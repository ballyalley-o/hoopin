import { Request, Response } from 'express'
import { CODE, Resp, RESPONSE } from 'constant'
import { ErrorResponse } from 'middleware'
import { playerService } from 'service'

const TAG = 'Player.Controller'
export class PlayerController {
  static async list(req: Request, res: Response) {
    const players = await playerService.list({
      name     : req.query.name as string,
      archetype: req.query.archetype as string,
      position : req.query.position as string,
    })
    res.status(CODE.OK).send(Resp.Ok(players, players.length))
  }

  static async get(req: Request, res: Response) {
    const player = await playerService.getById(req.params.id)
    if (!player) throw new ErrorResponse(RESPONSE.ERROR[404], CODE.NOT_FOUND)
    res.status(CODE.OK).send(Resp.Ok(player))
  }

  static async create(req: Request, res: Response) {
    const created = await playerService.create(req.body)
    res.status(CODE.CREATED).send(Resp.Created(created))
  }

  static async update(req: Request, res: Response) {
    const updated = await playerService.update(req.params.id, req.body)
    if (!updated) throw new ErrorResponse(RESPONSE.ERROR[404], CODE.NOT_FOUND)
    res.status(CODE.OK).send(Resp.Ok(updated))
  }

  static async remove(req: Request, res: Response) {
    await playerService.remove(req.params.id)
    res.status(CODE.OK).send(Resp.Ok({}))
  }
}
