module.exports = {
	apps: [
		{
			name: 'frontend-ngr',
			script: 'npm',
			cwd: '/home/newgoldxgG7/newgoldenroad.edu.vn/public_html',
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
			'post-setup': 'npm install; npm run build; pm2 start ecosystem.config.js --env production',
			'post-deploy': 'npm install; npm run build; pm2 restart ecosystem.config.js --env production'
		}
	}
};
