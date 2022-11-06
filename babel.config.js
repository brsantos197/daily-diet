module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [[
      'module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@storge': './src/storge',
          '@screens': './src/screens',
          '@utils': './src/utils',
        }
      }
    ]]
  };
};
