const { override, addWebpackAlias } = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const root = path.resolve(__dirname);

const aliases = {
  assets: `${root}/src/assets`,
  components: `${root}/src/components`,
  pages: `${root}/src/pages`,
  actions: `${root}/src/store/actions`,
  selectors: `${root}/src/store/selectors`,
  store: `${root}/src/store`,
  utils: `${root}/src/utils`,
};

module.exports = override(addWebpackAlias(aliases));
