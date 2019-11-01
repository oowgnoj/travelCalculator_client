const { override, fixBabelImports } = require('customize-cra');


module.exports = function override(config, env) {
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
