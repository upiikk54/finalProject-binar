const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: 'dgse4mkvc',
    api_key: '656233818755982',
    api_secret: 'qbId6LT6Maox40Zd52YyngiOkss',
    secure: true
});

module.exports = cloudinary;