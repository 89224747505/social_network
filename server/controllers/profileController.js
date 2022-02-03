const {User, Contacts, Photo} = require('../models/models');
const ApiError = require('../error/apiError');
const uuid = require('uuid');
const path = require('path');
const sharp = require('sharp');

class ProfileController {

    async registration(req, res, next) {
        let userResponse, contactResponse, photoResponse;
        const newUserProfile = req.body;
        const { login,
                password,
                email,
                name,
                fullName,
                status,
                lookingForAJob,
                lookingForAJobDescription} = newUserProfile;
        const {github, vk, facebook, instagram, twitter, website, youtube, mainLink} = newUserProfile.contacts;
        try {
            userResponse = await User.create({login, password, email, name, fullName, status, lookingForAJob, lookingForAJobDescription})
            contactResponse = await Contacts.create({github, vk, facebook, instagram, twitter, website, youtube, mainLink, userId:userResponse.id})
            photoResponse = await Photo.create({small:null, large:null, userId:userResponse.id})
        }
        catch (e) {
            return next(ApiError.internal("Ошибка сервера. Запись в БД не удалась!!!"))
        }


        res.status(200).json({ user:userResponse.dataValues, contacts:contactResponse.dataValues, photo:photoResponse.dataValues, message:"Все данные получены! Новый пользователь создан!"})
    }

    async setPhotoProfile(req, res, next) {
        const {userId} = req.body;
        const {img} = req.files;

        if (!userId) return next(ApiError.badRequest("Не указан ID пользователя. Измените параметр и сделайте новый запрос"));

        let uuidMy = uuid.v4();

        let fileNameLarge = path.resolve(__dirname, '..', 'static', uuidMy + 'large.jpg');
        let fileNameSmall = path.resolve(__dirname, '..', 'static', uuidMy + 'small.jpg');

        await img.mv(fileNameLarge);

        await sharp(fileNameLarge).resize(100, 100).toFile(fileNameSmall, function(err) {
                if (err) return next(ApiError.internal("Ошибка сервера. Запись в БД не удалась!!!"))});

        res.status(200);
    }

    async setStatusProfile(req, res) {

    }

    async getStatusProfileUserId(req, res, next) {
        let id;
        let statusUserId;
        try {
            id = req.params.userId.replace(/\s/g, '');
        }
        catch (e) {
            id = req.params.userId;
        }

        if (!id || id ==='') {
            return next(ApiError.badRequest("Не указан ID пользователя. Измените параметр и сделайте новый запрос"))
        }
        try {
            statusUserId = await User.findOne({where: {id}});
            const {status} = statusUserId.dataValues;
            res.status(200).json({status});
        }
        catch (e){
            return next(ApiError.internal("Ошибка сервера"))
        }
    }

    async getProfileUserId(req, res, next) {
        let id;
        let dataUserId, contactsUserId, photoUserId;
        try {
           id = req.params.userId.replace(/\s/g, '');
        }
        catch (e) {
            id = req.params.userId;
        }

        if (!id || id ==='') {
            return next(ApiError.badRequest("Не указан ID пользователя. Измените параметр и сделайте новый запрос"))
        }
        try {
            dataUserId = await User.findOne({where: {id}});
            contactsUserId = await Contacts.findOne({where:{userId:id}});
            photoUserId = await Photo.findOne({where:{userId:id}});

            const {email, name, fullName, status, lookingForAJob, lookingForAJobDescription} = dataUserId.dataValues;
            const {github, vk, facebook, instagram, twitter, website, youtube, mainLink} = contactsUserId.dataValues;
            const {small, large} = photoUserId.dataValues;

            res.status(200).json({userId:id, email, name, fullName, status, lookingForAJob, lookingForAJobDescription,
                contacts:{github, vk, facebook, instagram, twitter, website, youtube, mainLink},
                photos:{small, large}});
        }
        catch (e){
            return next(ApiError.internal("Ошибка сервера"))
        }
    }
}

module.exports = new ProfileController();