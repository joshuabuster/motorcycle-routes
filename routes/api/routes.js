const express = require('express');
const router = express.Router();
const routesCtrl = require('../../controllers/routes');
router.use(require('../../config/auth'));

/*--------- Public Routes ----------*/
router.get('/', routesCtrl.index);
router.put('/:id/add', routesCtrl.queueAdd)
router.put('/:id/remove', routesCtrl.queueRemove)


/*-------- Protected Routes --------*/
router.post('/', checkAuth, routesCtrl.create);
router.get('/:id', checkAuth, routesCtrl.show);
router.put('/:id', checkAuth, routesCtrl.update);
router.delete('/:id',checkAuth, routesCtrl.deleteOne);


/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;