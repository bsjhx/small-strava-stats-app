import { Response } from "express";
import { TypedRequestBody } from "../../infrastructure/TypedRequestBody";
import { RegisterUserRequest } from "../adapters/api/register.request";

export class UserFacade {

    authorize(request: TypedRequestBody<RegisterUserRequest>, response: Response): void {
        console.log('lolek 1', request.body);
        
        response.send('loool');
    }
}
