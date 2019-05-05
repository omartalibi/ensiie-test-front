module.exports = function(config) {
    config.set({
      mutator: "javascript",
      mutate: [
        '!./index.js',
        '!./src/HttpClient.js',
        './src/Entity/Jetpack.js ',
        'src/Service/Api/JetpackApi.js',
        'src/util.js'
      ],
      packageManager: "npm",
      reporters: ["clear-text", "progress"],
      testRunner: "jest",
      transpilers: [],
      coverageAnalysis: "off",
      thresholds: {
        break: 30 
        // ..
      }
    });
  };