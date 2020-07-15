const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

const root = path.resolve(__dirname);

const aliases = {
  assets: `${root}/src/assets`,
  components: `${root}/src/components`,
  pages: `${root}/src/pages`,
  utils: `${root}/src/utils`,
};

module.exports = override(addWebpackAlias(aliases));
