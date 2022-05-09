/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true.valueOf,
	async redirects() {
		return [
			{
				source: '/tim-hieu-ve-canada',
				destination: '/thong-tin-nuoc-canada',
				permanent: true
			}
		];
	},
	images: {
		domains: ['localhost']
	}
};

module.exports = nextConfig;
