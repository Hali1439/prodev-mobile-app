const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = getDefaultConfig(__dirname);

  // keep default config — this is safe for NativeWind + Expo projects
  return config;
})();
