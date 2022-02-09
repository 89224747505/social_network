const {User, Followed} = require('../models/models.js')
const ApiError = require("../error/apiError");

class FollowController {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getCheckFollowedUserId (req, res) {

    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async setFollowUserId (req, res, next) {

        //Получаем данные из мидлвара, который передал данные в реквест в объект юзер ID авторизированного пользователя

        const authUserID = req.user.id;

        //Достаем данные из параметров URL адреса :userID и помещаем ее в переменную setUserID
        //Если значение подписываемого пользователя заданы не верно, то полылается ошибка

        let setUserID;
        try {
            setUserID = req.params.userId.replace(/\s/g, '');
        }
        catch (e) {
            setUserID = req.params.userId;
        }
        if (!setUserID || setUserID ==='') return next(ApiError.badRequest("Не указан ID пользователя. Измените параметр и сделайте новый запрос"));

        //Проверяем не хотят ли подписаться сами на себя

        if (setUserID === authUserID) return next(ApiError.badRequest("Вы не можете подписаться сами на себя!"));

        //Проверяем наличие пользователя на которого подписываемся в БД

        let dataSetUserId;
        try {
            dataSetUserId = await User.findOne({where: {id: setUserID}});
        }
        catch (e){
            return next(ApiError.badRequest("Пользователь с таким id не найден. Подписка не возможна"));
        }

        // Если пользователь возвращается нулевым или undefined, то ошибка

        if (!dataSetUserId) return next(ApiError.badRequest("Пользователь с таким id не найден. Подписка не возможна"));

        //Проверяем наличие подписки на этого пользователя в БД

        try {
            const checkUserFollowed = Followed.findOne({where:{userId:authUserID, followedUserId:setUserID}})
            if (checkUserFollowed) return next(ApiError.badRequest("Вы уже подписаны на этого пользователя"));
        }catch (e){
            return next(ApiError.internal("Произошла ошибка чтения из БД на сервере"));
        }

        //Если все хорошо, то записываем данные о подписке в БД

        try {
            const follow = await Followed.create({userId:authUserID, followedUserId:setUserID})
        } catch (e)
        {
            return next(ApiError.internal("Произошла ошибка записи в БД на сервере"));
        }

        res.status(200).json({"authID":authUserID, "setID":setUserID, "message":"Все хорошо! Пользователь подписан"});
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async setUnfollowUserId (req, res) {

    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

module.exports = new FollowController();