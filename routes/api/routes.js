const express = require('express');
const router = express.Router();
const routesCtrl = require('../../controllers/routes');

/*--------- Public Routes ----------*/
router.get('/', routesCtrl.index);
router.get('/:id', routesCtrl.show);
router.post('/', routesCtrl.create);


/*-------- Protected Routes --------*/
router.put('/:id', checkAuth, routesCtrl.update);
router.delete('/:id', checkAuth, routesCtrl.deleteOne);


/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;