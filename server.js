const dbConn = require('./db');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 6969;



dbConn()
.then(() => {
    console.log('Connected to DB.');

    app.listen(PORT, () => console.log(`APP LISTENING FOR CONNECTIONS ON PORT: ${PORT}`));

}).catch(error => {
    console.log('Could not start APP error:', error);
})