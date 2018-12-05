module.exports = {
  apps: [{
    script: './server.js',
    name: 'breadhead',
    watch: true,
    instances: 1,
    exec_mode: 'cluster',
    merge_logs: true,
    env_production: {
      NODE_ENV: 'production',
    },
  }],
}
