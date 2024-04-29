const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//routes
const indexRoutes = require('./routes/indexRoutes');
const adminRoutes = require('./routes/adminRoutes');

//app kismini congif etme
app.set('view engine', 'ejs');
app.use(express.static('public')); // middleware

//routes kullanimi

app.use(indexRoutes);
app.use(adminRoutes);

const server = app.listen(4000, err => {
	if (err) {
		console.log(err);
	}
	console.log('server running %d', server.address().port);
});
