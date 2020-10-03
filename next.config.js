// dotenv-webpack v3.0 doesn't work correctly with next

const DotenvWebpack = require('dotenv-webpack');

module.exports = {
  webpack: config => {
    config.plugins.push(new DotenvWebpack({ silent: true }));
    return config;
  }
}
