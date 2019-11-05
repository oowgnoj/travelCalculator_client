const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = function override(config, env) {
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': ' #bcc8d6' },
  }),
);
