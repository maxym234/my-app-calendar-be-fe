//require для підключення пакетів
import express, { Express } from 'express';
import { router } from './routest/auth.routs';
const config = require('config')
//MongoDB
const mongoose = require('mongoose')
const app: Express = express();
app.use('/api/auth', router)
const PORT = config.get('port') || 5000;
async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            // useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...!`))
    } catch (e) {
        console.log('Server error', e);
        process.exit(1);
    }
}

start();

