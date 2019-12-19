const router = require('express').Router();
const path = require('path');

router.get('*', (req, res) => {
	if (process.env.NODE_ENV === 'production') {
		return res.sendFile(path.join(__dirname, "../client/build/index.html"));
	} else {
		return res.status(404).send('This route is meant for production!');
	}
	
});

module.exports = router;