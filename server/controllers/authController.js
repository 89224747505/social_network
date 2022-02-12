const {User} = require('../models/models.js')
const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//async isAuthMe (req, res) - функция проверки авторизации пользователя по jwt токену
//async setLoginUser (req, res, next) - функция логинизации пользователя
//async setAuthUserDisable (req, res) - функция деактивирования авторизации пользователя


class AuthController {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async isAuthMe (req, res) {
        //Создание JWT токена

        const jwtToken = jwt.sign({id:req.user.id, login:req.user.login},
            process.env.SECRET_JWT_KEY,{expiresIn:'24h'});

        //Записываем в БД jwt токен

        let userToken = await User.update({jwt:jwtToken},{where:{id:req.user.id}})

        //Отправляем данные о пользователе и новый токен
        res.status(200).json({message:true, id:req.user.id, login:req.user.login, jwt:jwtToken})
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async setLoginUser (req, res, next) {
        const {email, login, password} = req.body;
        // Ищем в БД соответствие пользователя логину и емайлу

        const user = await User.findAll({where:{login,email}});

        //Если пользователь не найден по емайлу или логину, то оправить ошибку клиенту

        if (typeof user[0] == "undefined") return next(ApiError.badRequest("Пользователь с таким login и email не найден"));

        if (!user[0].login || !user[0].email) return next(ApiError.badRequest("Пользователь с таким login и email не найден"));

        //Проверка и декодирование пароля который записан в БД

        let comparePassword = bcrypt.compareSync(password, user[0].password);


        //Проверяем совпадение паролей, если не совпадают ошибка передается клиенту

        if (!comparePassword) return next(ApiError.badRequest("У данного пользователя другой пароль, попробуйте ещё раз"));

        //Создание JWT токена

        const jwtToken = jwt.sign({id:user[0].id, login:user[0].login},
            process.env.SECRET_JWT_KEY,{expiresIn:'24h'});

        //Записываем в БД jwt токен

        let userToken = await User.update({jwt:jwtToken},{where:{id:user[0].id}})

        // Оправка ответа если все прошло хорошо и мы залогинились

        res.status(200).json({ message:"Все данные получены! Пользователь залогинен!", jwt:jwtToken, id:user[0].id});
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async setAuthUserDisable (req, res) {
        //Записываем в БД jwt нулевой токен

        let userToken = await User.update({jwt:null},{where:{id:req.user.id}})

        res.status(200).json({ message:"Все данные получены! Пользователь деавторизован!"});
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = new AuthController();

//request GET - http://localhost:5000/api/auth/me
//headers {authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJOaWtpdGEiLCJpYXQiOjE2NDQzMD
//                                           M5ODgsImV4cCI6MTY0NDM5MDM4OH0.Rzhd-vVMnNc_Sie38MTxGnhv-dSXzbv8BQhFWNKq44Y"}
//response
// {
//     "message": "true",
//     "id": 1,
//     "login":"Ivan",
//     "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJOaWtpdGEiLCJpYXQiOjE2NDQzMDQwMTIsImV4cCI6MTY0NDM5MDQxMn0.Uicyfat-yWM1W-1NrbElos7_sFWI6ZfxaMuIiZ8MIdA"
// }

//request POST - http://localhost:5000/api/auth/login
//{
//     "email":"b9829882010@gmail.com",
//     "login":"Nikita",
//     "password":"8495"
// }
//response
//{
//     "message": "Все данные получены! Пользователь залогинен!",
//     "id": 5,
//     "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJOaWtpdGEiLCJpYXQiOjE2NDQzMDI3NTgsImV4cCI6MTY0NDM4OTE1OH0.LUGQ12ghDiYJDaR7ovv02gLVxyCGZd6eJF_utVg9zx8"
// }

//request DELETE - http://localhost:5000/api/auth/login
//headers {authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJOaWtpdGEiLCJpYXQiOjE2NDQzMD
//                                           M5ODgsImV4cCI6MTY0NDM5MDM4OH0.Rzhd-vVMnNc_Sie38MTxGnhv-dSXzbv8BQhFWNKq44Y"}
//response
// {
//     "message": "Все данные получены! Пользователь деавторизован!"
// }