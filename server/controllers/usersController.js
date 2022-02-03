const {User} = require('../models/models')
const ApiError = require('../error/apiError')

class UsersController {
    async getUsers(req, res, next) {
        let {count, page} = req.query;
        !count ? count = 10 : console.log("ok "+{count});
        !page ? page = 1 : console.log("ok "+{page});
        res.json({count,page});
    }
}

module.exports = new UsersController();