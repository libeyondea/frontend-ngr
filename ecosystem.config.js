module.exports = {
	apps: [
		{
			name: 'frontend-ngr',
			script: 'npm',
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
			repo: 'git@github.com:libeyondea/frontend-ngr.git',
			path: '/home/newgoldxgG7/newgoldenroad.edu.vn/public_html',
			'post-setup': 'npm install; npm build; npm run setup',
			'post-deploy': 'npm install; npm build; npm run deploy'
		}
	}
};
