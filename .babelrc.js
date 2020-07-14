const path = require('path');
const { aliases } = require('./aliases');
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./src')],
      alias: { ...aliases },
    },
  ]
];
module.exports = {
  presets: ['react-app'],
  plugins: [...plugins],
};
