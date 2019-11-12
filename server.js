const dbConn = require('./db');
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 6969;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', authRoutes);

dbConn()
.then(() => {
    console.log('Connected to DB.');
    app.listen(PORT, () => console.log(`APP LISTENING FOR CONNECTIONS ON PORT: ${PORT}`));

}).catch(error => {
    console.log('Could not start APP error:', error);
})