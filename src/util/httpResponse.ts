/* eslint-disable no-console */
import { Request, Response } from 'express';
import { THttpResponse } from '../types/types';
import config from '../config/config';

import { EApplicationEnvironment } from '../constant/application';

export default (
    req: Request, res: Response, reponseStatusCode: number, responseMessage :string,data:unknown = null
): void => {
    const response: THttpResponse = {
        success: true,
        statuscode: reponseStatusCode,
        request: {
            method: req.method,
            ip: req.ip || null,
            url: req.originalUrl,
        },
        message: responseMessage,
        data: data
    }
    console.info(`CONTROLLER_RESPONSE`,{
        meta:response
    })
    //Production Check
    if(config.ENV === EApplicationEnvironment.PRODUCTION){
        delete response.request.ip
    }
    res.status(reponseStatusCode).json(response)
}