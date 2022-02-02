const sequelize = require('./../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    name:{type: DataTypes.STRING, allowNull: true},
    fullName:{type: DataTypes.STRING, allowNull: true},
    status:{type:DataTypes.STRING},
    lookingForAJob:{type: DataTypes.BOOLEAN, defaultValue: 'false'},
    lookingForAJobDescription:{type: DataTypes.STRING, allowNull: true},
});

const Photo = sequelize.define('photo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    small:{type: DataTypes.STRING, allowNull: true},
    large:{type: DataTypes.STRING, allowNull: true},
});

const Contacts = sequelize.define('contacts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    github:{type: DataTypes.STRING},
    vk:{type: DataTypes.STRING},
    facebook:{type: DataTypes.STRING},
    instagram:{type: DataTypes.STRING},
    twitter:{type: DataTypes.STRING},
    website:{type: DataTypes.STRING},
    youtube:{type: DataTypes.STRING},
    mainLink:{type: DataTypes.STRING},
});

const Followed = sequelize.define('followed', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    followedUserId: {type: DataTypes.BOOLEAN, defaultValue: 'false'},
});

User.hasOne(Photo);
Photo.belongsTo(User);

User.hasOne(Contacts);
Contacts.belongsTo(User);

User.hasMany(Followed);
Followed.belongsTo(User);


module.exports = {User, Photo, Contacts, Followed};