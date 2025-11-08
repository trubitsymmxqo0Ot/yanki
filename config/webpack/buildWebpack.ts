import { buildDevServer } from "./buildDevServer";
import { buildModule } from "./buildModule";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { BuildConfig } from "./types/types";
import { type Configuration } from "webpack";
//@ts-ignore
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildWebpack(options: BuildConfig): Configuration {
  const {paths, port, isDev, mode} = options;
  return {
    entry: paths.etnry,
    mode: mode,
    module: buildModule(isDev),
    resolve: buildResolve(),
    plugins: buildPlugins(isDev, paths),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    devServer: isDev ? buildDevServer(port) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  };
}
