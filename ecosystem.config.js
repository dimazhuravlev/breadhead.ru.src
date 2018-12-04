module.exports = {
  apps: [{
    script: './server.js',
    watch: true,
    instances: 'max',
    exec_mode: 'cluster',
    merge_logs: true,
    env_production: {
      NODE_ENV: 'production',
    },
  }],
}
