import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";

export function buildModule(isDev: boolean): Configuration["module"] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
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

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      modulesLoader,
      "sass-loader",
    ],
  };

  return {
    rules: [tsLoader, scssLoader, cssLoader, svgrLoader],
  };
}
