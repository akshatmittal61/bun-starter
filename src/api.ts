import http from "./http";

export const fetchUser = async (username: string) => {
	try {
		const res = await http.get(`/users/${username}`);
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
