var router = require('express').Router();
const userControllers = require('../controllers/userControllers');


// User registration route
router.post('/register_user', userControllers.userRegister);
// User login route
router.post('/login_user', userControllers.login);
// User profile route
router.get('/get_user_all', userControllers.getalluser);


module.exports = router;
