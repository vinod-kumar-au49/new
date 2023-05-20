const { Router } = require('express')
const { getDetailes, getDetailesByID, postdetail } = require('../controllers/detailesControler')
const { authMiddleware, isAdminMiddleware } = require('../middlewares/authmiddleware')
const detailRouter = Router()

detailRouter.use(authMiddleware)

detailRouter.get('/',isAdminMiddleware, getDetailes)
detailRouter.get('/:detailID', getDetailesByID)
detailRouter.post('/', postdetail)


module.exports = detailRouter