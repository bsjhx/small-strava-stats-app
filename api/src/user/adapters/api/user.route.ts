import express, { Request, Response }  from 'express';
import { TypedRequestBody } from '../../../infrastructure/TypedRequestBody';
import { UserFacade } from '../../domain/user.facade';
import { RegisterUserRequest } from './register.request';

const router = express.Router();
const userFacade = new UserFacade();

router.post("/register", (request: TypedRequestBody<RegisterUserRequest>, response: Response) => userFacade.authorize(request, response));

export { router as userRoute };