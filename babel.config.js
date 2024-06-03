module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    // '@babel/preset-flow',
    // 'module:@react-native/babel-preset',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@screens': './source/screens',
          '@components': './source/components',
          '@assets': './source/assets',
          '@store': './source/store',
          '@navigation': './source/navigation',
        },
      },
    ],
  ],
};
