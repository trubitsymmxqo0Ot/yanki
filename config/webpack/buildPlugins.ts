import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(
  isDev: boolean,
  paths: BuildPaths
): Configuration["plugins"] {
  const plugins = [];
  plugins.push(
    new HtmlWebpackPlugin({
      filename: isDev ? "index.html" : "[name].[contenthash].html",
      template: paths.html,
      favicon: paths.favicon,
      minify: isDev ? false : true,
    })
  );
  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerPort: 3009,
        openAnalyzer: true,
    }));
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      })
    );
  }
  return plugins;
}
