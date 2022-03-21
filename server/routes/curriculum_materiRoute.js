import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
//import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',indexCtrl.curriculum_materiCtrl.findAll)
router.post('/',indexCtrl.curriculum_materiCtrl.create)
//router.get('/images/:filename',uploadDownload.showProfile)
//router.post('/cuma',uploadDownloadHelper.uploadSingleFile,indexCtrl.curriculum_materiCtrl.createCuma)
// router.post('/cumacuma',uploadDownload.uploadFiles,indexCtrl.curriculum_materiCtrl.createCumacuma)
// router.post('/sub',uploadDownload.uploadFiles,indexCtrl.curriculum_materiCtrl.createCumaSub)
// router.put('/:id',uploadDownload.uploadFiles,indexCtrl.curriculum_materiCtrl.updateCuma)
router.delete('/:id',indexCtrl.curriculum_materiCtrl.remove)

export default router