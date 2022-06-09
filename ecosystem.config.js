module.exports = {
	apps: [
		{
			name: 'frontend-ngr',
			script: 'npm',
			cwd: '/home/newgoldxgG7/newgoldenroad.edu.vn/current',
			error_file: '/home/newgoldxgG7/newgoldenroad.edu.vn/logs/web.err.log',
			out_file: '/home/newgoldxgG7/newgoldenroad.edu.vn/logs/web.out.log',
			args: 'start',
			autorestart: true,
			watch: false,
			instances: 1,
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
			path: '/home/newgoldxgG7/newgoldenroad.edu.vn',
			'post-setup': 'npm install; npm run build; pm2 start ecosystem.config.js --env production',
			'post-deploy': 'npm install; npm run build; pm2 restart ecosystem.config.js --env production'
		}
	}
};
