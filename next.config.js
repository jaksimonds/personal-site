const path = require('path')

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '4000',
				pathname: '/assets/**',
			},
			{
				protocol: 'https',
				hostname: 'api.jaksimonds.dev',
				port: '',
				pathname: '/assets/**',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/:all*(svg|jpg|png|webp)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=9999999999, must-revalidate',
					},
				],
			},
		]
	},
}
