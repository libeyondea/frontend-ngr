import http from "./http";

const fetcher = async (url) => {
	const response = await http.get({
		url: url
	});
	return response.data;
};

export default fetcher;
