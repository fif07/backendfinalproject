import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import authJwt from "../helpers/authJWT"

const router = Router()

router.post("/signin",authJwt.authenticate,authJwt.login)
router.post('/signup',indexCtrl.usersCtrl.signup)

export default router