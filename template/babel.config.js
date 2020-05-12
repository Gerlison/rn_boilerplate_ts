module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        cwd: ['packagejson'],
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@': './src',
          '@icons': './src/assets/icons',
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',

          '@navigation': './src/navigation',
          '@core': './src/shared/core',
          '@helpers': './src/shared/helpers',
          '@styles': './src/shared/styles',
          '@services': './src/shared/services',

          '@store': './src/store',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
