const Router = require('express');
const router = new Router();
const UserController = require('../controllers/usersController')
const authMiddleware = require("../middleware/authMiddleware");


router.get('/', authMiddleware, UserController.getUsers);

module.exports = router;