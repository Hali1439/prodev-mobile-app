module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Example: If using Reanimated
      'react-native-reanimated/plugin',
      // Other plugins as needed, e.g., '@babel/plugin-transform-runtime'
      'nativewind/babel',
    ],
  };
};