module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@resources': './src/resources',
          '@icons': './src/icons',
        },
      },
    ],
  ],
};
