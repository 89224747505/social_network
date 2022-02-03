const {User, Contacts, Photo} = require('../models/models');
const ApiError = require('../error/apiError');
const uuid = require('uuid');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs')
const {response} = require("express");

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
        let photoResponse;

        if (!userId || !req.files) return next(ApiError.badRequest("Не указан ID пользователя или не прикреплен файл картинки. Измените параметр и сделайте новый запрос"));

        const {image} = req.files;

        if (!image) return next(ApiError.badRequest("Введите корректное имя свойства <<img>>"));

        // Блок проверки и удаления файлов small/large из static, если значения не нулевые
        try {
            let oldPhotoPath;
            oldPhotoPath = await Photo.findOne({where: {userId}});

            const {small, large} = oldPhotoPath.dataValues;

            if (small !== null) {
            fs.unlink(path.resolve(__dirname,'..','static', small),(err)=>{
                if (err) return next(ApiError.badRequest("Ошибка удаление small картинки"))})}

            if (large !== null) {
            fs.unlink(path.resolve(__dirname,'..','static', large),(err)=>{
                if (err) return next(ApiError.badRequest("Ошибка удаление large картинки"))})}
        }
        catch (e){
            return next(ApiError.internal("Ошибка удаления файлов с сервера"))
        }


        // -------------------------------------------------------------------

        let uuidMy = uuid.v4();
        let fileNameSmallWithoutDir =  uuidMy + 'small.jpg';
        let fileNameLargeWithoutDir =  uuidMy + 'large.jpg';
        let fileNameLarge = path.resolve(__dirname, '..', 'static', fileNameLargeWithoutDir);
        let fileNameSmall = path.resolve(__dirname, '..', 'static', fileNameSmallWithoutDir);

        await image.mv(fileNameLarge);

        await sharp(fileNameLarge).resize(100, 100).toFile(fileNameSmall, function(err) {
                if (err) return next(ApiError.internal("Ошибка сервера. Запись в БД не удалась!!!"))});
        await Photo.update({small:fileNameSmallWithoutDir, large:fileNameLargeWithoutDir}, {where: {userId}})
            .then(result => {res.status(200).json({message:'Все хорошо! Фотография загружена в БД'})})
            .catch(err =>{return next(ApiError.internal("Ошибка сервера. Запись в БД не удалась!!!"))});
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