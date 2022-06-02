import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
	timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUT
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const http = {
	get: ({ baseURL, url, params, token = false }) => {
		return instance.request({
			baseURL: baseURL,
			method: 'GET',
			url: url,
			params: params,
			headers: {
				...(token && { apikey: `D02eRUTLbJ2FF2sDuRZStrYugvhLjSRY` })
			}
		});
	},
	post: ({ baseURL, url, data, token }) => {
		return instance.request({
			baseURL: baseURL,
			method: 'POST',
			url: url,
			data: data,
			headers: {
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	},
	put: ({ baseURL, url, data, token }) => {
		return instance.request({
			baseURL: baseURL,
			method: 'PUT',
			url: url,
			data: data,
			headers: {
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	},
	delete: ({ baseURL, url, params, token }) => {
		return instance.request({
			baseURL: baseURL,
			method: 'DELETE',
			url: url,
			params: params,
			headers: {
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	},
	upload: ({ baseURL, url, files, data, token }) => {
		const formData = new FormData();
		if (data) {
			for (let field in data) {
				formData.set(field, data[field]);
			}
		}
		if (files) {
			for (let field in files) {
				if (files[field]) {
					formData.append(field, files[field], files[field].name);
				}
			}
		}
		return instance.request({
			baseURL: baseURL,
			method: 'POST',
			url: url,
			data: formData,
			headers: {
				'Content-Type': 'multipart/form-data',
				...(token && { Authorization: `Bearer ${token}` })
			}
		});
	}
};

export default http;
