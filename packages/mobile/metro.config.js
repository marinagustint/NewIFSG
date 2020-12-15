/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// Added for Inlcuding common folder
const path = require('path');

const extraNodeModules = {
  common: path.resolve(__dirname + '/../common'),
};
const watchFolders = [path.resolve(__dirname + '/../common')];
// Added for Inlcuding common folder

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  // Added for Inlcuding common folder
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from common/ to local node_modules
        name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
  // Added for Inlcuding common folder
};
