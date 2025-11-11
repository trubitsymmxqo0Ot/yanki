import type { StorybookConfig } from "@storybook/react-webpack5";
import { BuildPaths } from "../config/webpack/types/types";
import path from 'path';

const __dirname = path.resolve(path.dirname(''));


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    const isDev = true;
    const paths: BuildPaths = {
      absolutePath: path.resolve(__dirname, "."),
      etnry: "",
      favicon: "",
      html: "",
      output: "",
      srcPath: path.resolve(__dirname, "src"),
    };

    config.mode = "development";
    config.resolve?.extensions?.push(".tsx", ".ts", ".js");
    config.resolve = { ...config.resolve };
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": paths.srcPath,
      "!": paths.absolutePath,
    };

    const modulesLoader = {
      loader: "css-loader",
      options: {
        modules: {
          namedExport: false,
          auto: (resPath: string) => Boolean(resPath.includes(".module.")),
          localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          mode: "local",
        },
      },
    };
    const scssLoader = {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", modulesLoader, "sass-loader"],
    };
    config.module = { ...config.module };
    config.module.rules?.push(scssLoader);
    config.module.rules?.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });
    config.module.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
export default config;
