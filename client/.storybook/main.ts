import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)", "../src/**/*.mdx", "../src/**/*.story.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  staticDirs: ["..\\public"],
  webpackFinal: async (config, {}) => {
    config!.resolve!.plugins = [...(config?.resolve?.plugins || []), new TsconfigPathsPlugin({
      extensions: config?.resolve?.extensions
    })];
    return config;
  }
};
export default config;