const Router = require('express');
const router = new Router();
const FollowController = require('../controllers/followController');

router.get('/:userId', FollowController.getCheckFollowedUserId);
router.post('/:userId', FollowController.setFollowUserId);
router.delete('/:userId', FollowController.setUnfollowUserId);


module.exports = router;