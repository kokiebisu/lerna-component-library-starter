module.exports = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // without this, then storybook will reference the module field path in package.json
    config.resolve.mainFields = ["src", "module", "main"];
    return config;
  },
};
