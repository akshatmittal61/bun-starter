import { PORT } from "./config";

const server = Bun.serve({
	port: PORT,
	fetch(request, server) {
		return new Response("Hello, World!");
	},
});

console.log(`Server running at ${server.port}`);
