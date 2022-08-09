import express from 'express';
import { userRoute } from '../user/adapters/api/user.route';

const router =  express.Router();

router.use("/user", userRoute);

router.get('/hello-world', (req, res) => {
    res.send("ok");
});

export { router as routerV1 };