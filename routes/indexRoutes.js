const express = require('express');
const router = express.Router();

let data = [
	{
		postTitle: 'java',
		postSubTitle: 'java programlama',
		image: 'assets/img/about-bg.jpg',
	},
	{
		postTitle: 'python',
		postSubTitle: 'java programlama',
		image: 'assets/img/about-bg.jpg',
	},
	{
		postTitle: 'html',
		postSubTitle: 'java programlama',
		image: 'assets/img/about-bg.jpg',
	},
];

router.get('/', (req, res) => {
	res.render('home', { data: data }); //ilki ejs tarafindan alinacak isim ikincisi burdan verdigimiz
});

router.get('/about/', (req, res) => {
	res.render('about');
});

router.get('/contact', (req, res) => {
	res.render('contact');
});

router.get('/resume', (req, res) => {
	res.end('resume page');
});

module.exports = router;
