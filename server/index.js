require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 3000;
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');


const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

// Обработка ошибок всегда последний middleware
app.use(errorHandler);

const startServer = async ()=> {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, ()=> {console.log(`SERVER IS READY. PORT is ${PORT}`)})
    }catch (e) {
        console.log(e);
    }
}

startServer();