module.exports = {
	apps: [
		{
			name: 'frontend-ngr',
			cwd: './',
			script: 'node_modules/next/dist/bin/next',
			args: 'start',
			exec_mode: 'cluster',
			instances: 'max',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	],
	deploy: {
		production: {
			user: 'root',
			host: '103.221.220.109',
			ref: 'origin/main',
			repo: 'git@gitlab.com:web-app/web-app.git',
			path: '/deploy/demo/web-app',
			'post-setup': 'npm install; npm build; npm run setup',
			'post-deploy': 'npm install; npm build; npm run deploy'
		}
	}
};
