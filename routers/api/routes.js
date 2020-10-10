const express = require('express');
const router = express.Router();
const routesCtrl = require('../../controllers/routes');

/*-- Protected Routes --*/


/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;