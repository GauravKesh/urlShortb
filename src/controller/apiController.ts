import { NextFunction, Request,Response } from 'express'
import httpResponse from '../util/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'
export default {
    self: (req: Request, res: Response,next:NextFunction) => {
        try {
            // throw new Error('This is an error')
            const data = {
                name: 'Gaurav Kesh Roushan',
                email: 'gkrcoder@gmail.com',
            }
            httpResponse(req,res,200,responseMessage.SUCCESS,data)
        } catch (err) {
            httpError(next,err,req,500)

        }
    }
}