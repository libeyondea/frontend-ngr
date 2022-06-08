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
	]
};
