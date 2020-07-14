const path = require('path');
const root = path.join(__dirname, 'src');

const alias = {
  '~models': `${root}/models`,
  '~utils': `${root}/utils`,
  '~assets': `${root}/assets`,
  '~components': `${root}/components`,
  '~pages': `${root}/pages`,
};

module.exports = alias;
