import axios from "axios";

const http = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		"Content-Type": "application/json",
	},
});

export default http;
