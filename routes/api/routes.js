const express = require('express');
const router = express.Router();
const routesCtrl = require('../../controllers/routes');
router.use(require('../../config/auth'));

/*--------- Public Routes ----------*/
router.get('/', routesCtrl.index);
router.post('/', routesCtrl.create);
router.get('/:id', routesCtrl.show);
router.put('/:id', routesCtrl.update);
router.delete('/:id', routesCtrl.deleteOne);
router.put('/:id/add', routesCtrl.queueAdd)
router.put('/:id/remove', routesCtrl.queueRemove)


/*-------- Protected Routes --------*/


/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;