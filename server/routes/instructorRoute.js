import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',indexCtrl.instructorCtrl.findAll)
router.get('/images/:filename',uploadDownloadHelper.showProductImage)
router.post('/',uploadDownloadHelper.uploadSingleFile,indexCtrl.instructorCtrl.createInst)
// router.put('/:id',uploadDownload.uploadFiles,indexCtrl.instructorCtrl.updateInst)
router.delete('/:id',indexCtrl.instructorCtrl.remove)

export default router