import http from './http';

const fetcher = async (url) => {
	const response = await http.get({
		url: url,
		token: true
	});
	return response.data;
};

export default fetcher;
