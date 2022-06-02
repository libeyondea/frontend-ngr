/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true.valueOf,
	images: {
		domains: ['localhost', 'server.newgoldenroad.com']
	}
};

module.exports = nextConfig;
