/* eslint-disable no-console */
import { Request } from 'express';
import { THttpError } from '../types/types';
import responseMessage from '../constant/responseMessage';
import config from '../config/config';
import { EApplicationEnvironment } from '../constant/application';


export default (
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    err: Error | unknown, req: Request, errorStatusCode: number = 500
): THttpError => {
    const errorObj: THttpError = {
        success: false,
        statuscode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message || responseMessage.SOMETHING_WENT_WRONG:responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null

    }
    console.error(`CONTROLLER_ERROR`, {
        meta: errorObj
    })
    //Production Check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return errorObj


}