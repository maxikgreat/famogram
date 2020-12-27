// dotenv-webpack v3.0 doesn't work correctly with next

const DotenvWebpack = require('dotenv-webpack');
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  webpack: config => {
    config.plugins.push(new DotenvWebpack({
      silent: true,
      path: process.env.NODE_ENV === 'production' ? './.env.production' : './.env',
      systemvars: process.env.NODE_ENV === 'production'
    }));
    return config;
  },
  sassOptions: {
    outputStyle: 'expanded',
  },
  distDir: 'build',
})
