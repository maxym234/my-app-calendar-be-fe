//require для підключення пакетів
const express = require('express')
const config = require('config')
//MongoDB
const mongoose = require('mongoose')
const app = express()
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
