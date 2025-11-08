//@ts-ignore
import { Configuration } from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(port: number): DevServerConfiguration{
    return {
        port: port,
        hot: true,
        open: true,
    }
}