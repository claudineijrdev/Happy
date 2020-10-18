import {Router} from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'),OrphanagesController.create)
routes.patch('/orphanages/approve/:id/:accepted', OrphanagesController.accept)
routes.get('/acceptedlist', OrphanagesController.getAcceptedList)
routes.get('/pendinglist', OrphanagesController.getPendingList)
routes.delete('/orphanages/:id', OrphanagesController.delete)

export default routes