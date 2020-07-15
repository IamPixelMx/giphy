const { override, addWebpackAlias } = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const root = path.resolve(__dirname);

const aliases = {
  assets: `${root}/src/assets`,
  components: `${root}/src/components`,
  pages: `${root}/src/pages`,
  utils: `${root}/src/utils`,
};

module.exports = override(
  addWebpackAlias(aliases),
  /*, (config, env) => {
  config = rewireReactHotLoader(config, env);

  if (!config.plugins) {
    config.plugins = [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
      }),
    ];
  }

  config.resolve.aliases = {
    ...config.resolve.aliases,
    'react-dom': '@hot-loader/react-dom',
  };
  return config;
}*/
);
