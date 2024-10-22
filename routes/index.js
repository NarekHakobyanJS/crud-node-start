var express = require('express');
var router = express.Router();
const UsersControllers = require('../controllers/User')
const controller = new UsersControllers()

/* GET home page. */
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/users', controller.createUser);
router.delete('/users/:id', controller.removeUser);
router.patch('/users/change/:id', controller.changeUser);
module.exports = router;
