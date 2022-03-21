import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',indexCtrl.curriculumCtrl.findAll)
router.get('/images/:filename',uploadDownloadHelper.showProductImage)
//router.post('/',uploadDownloadHelper.uploadSingleFile,indexCtrl.curriculumCtrl.createCurr)
//router.put('/:id',uploadDownload.uploadFiles,indexCtrl.curriculumCtrl.updateCurr)
router.delete('/:id',indexCtrl.instructorCtrl.remove)

export default router