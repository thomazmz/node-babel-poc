const express = require('express');

const application = express();
const port = 4040;

application.use('/', (res, req) => {
	res.status(200).send('Hello World!');
});

application.listen(port, () => {
	console.log(`successfully listening on port ${port}`);
});