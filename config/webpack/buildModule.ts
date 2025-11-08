import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";

export function buildModule(isDev: boolean): Configuration["module"] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  return {
    rules: [tsLoader, sassLoader],
  };
}
