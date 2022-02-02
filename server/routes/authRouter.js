const Router = require('express');
const router = new Router();
const AuthController = require('../controllers/authController')

router.get('/me', AuthController.isAuthMe);
router.post('/login', AuthController.setLoginUser);
router.delete('/login', AuthController.setAuthUserDisable);

module.exports = router;