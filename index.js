const express = require("express");

const app = express();

function getTime() {
	const date = new Date();

	let dateAndTime = date.toLocaleString('en-US', {
		timeZone: 'America/New_York',
	});

	return dateAndTime;
}

app.use(function logger(req, res, next) {
	console.log(`${getTime()} EST - ${req.method} ${req.path} - ${req.ip}`);
	console.log("")
	next();
});

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.listen(3000, () => {
	console.log("Server started");
});
