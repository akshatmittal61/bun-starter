import { PORT } from "./config";

const server = Bun.serve({
	port: PORT,
	fetch(request, server) {
		const url = new URL(request.url);
		switch (url.pathname) {
			case "/":
				return new Promise((resolve, reject) => {
					const html = `
                        <html>
                            <head>
                                <title>Bun.js</title>
                            </head>
                            <body>
                                <h1>Hello, world!</h1>
                            </body>
                        </html>
                    `;
					resolve(new Response(html, { status: 200 }));
				});
			default:
				return new Promise((resolve, reject) => {
					const html = `
                        <html>
                            <head>
                                <title>Bun.js</title>
                            </head>
                            <body>
                                <h1>404 Not Found</h1>
                            </body>
                        </html>
                    `;
					resolve(new Response(html, { status: 404 }));
				});
				break;
		}
	},
	websocket: {
		open(socket) {
			console.log("Socket opened");
		},
		message(socket, message) {
			console.log("Socket message:", message);
		},
	},
});

console.log(`Server running at ${server.port}`);
