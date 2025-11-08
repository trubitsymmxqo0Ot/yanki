import { Configuration } from "webpack";
import { BuildPaths } from "./types/types";

export function buildResolve(paths: BuildPaths): Configuration['resolve'] {
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": paths.srcPath,
            "!": paths.absolutePath
        }
    }
}