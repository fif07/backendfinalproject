import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.curriculum_reviewsCtrl.findAll)
router.post('/',indexCtrl.curriculum_reviewsCtrl.create)
router.put('/:id',indexCtrl.curriculum_reviewsCtrl.update)
router.delete('/:id',indexCtrl.curriculum_reviewsCtrl.remove)

export default router