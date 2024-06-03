module.exports = {
  presets: ['module:@react-native/babel-preset'],
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
