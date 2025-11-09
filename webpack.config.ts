import path from 'path';
import { BuildPaths, BuildSettings, Mode } from './config/webpack/types/types';
import webpack from 'webpack';
import { buildWebpack } from './config/webpack/buildWebpack';

export default (env: BuildSettings): webpack.Configuration => {
    const paths: BuildPaths = {
        etnry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, "src", "shared", "assets", "favicon.png"),
        srcPath: path.resolve(__dirname, "src"),
        absolutePath: path.resolve(__dirname, '.'),
    }

    const mode: Mode = env.mode ?? 'development';
    const port: number = env.port ?? 3000;
    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpack({paths, port, isDev, mode})
    return config;
}
