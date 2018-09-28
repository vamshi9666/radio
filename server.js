const { createServer } = require('http');

const {parse} = require('url');

// eslint-disable-next-line
const dev = process.env.NODE_ENV !== 'prod';

const next = require('next');

const app = next({dev});

const handle = app.getRequestHandler();


// eslint-disable-next-line
const port = process.env.port || 3000;

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url,true);
		const { pathname, query } = parsedUrl;
		if (pathname === '/') {
			app.render(req, res, '/', query);
		} else if (pathname =='/a'){a
			app.render(req,res,'/a', query);
		} else {
			handle(req, res, parsedUrl);
		}
	})
		.listen(port, (err) => {
			if (err){
				console.log(err);
			}
			else{
				console.log(`Server started on http://localhost:${port}`);
			}
		});
});
