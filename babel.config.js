module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ts',
          '.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
        ],
        root: ['.'],
        alias: {
          src: './src',
          constants: './src/constants',
          api: './src/api',
          atoms: '/.src/atoms',
          components: './src/components',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
