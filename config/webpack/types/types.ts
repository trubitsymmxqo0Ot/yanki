export interface BuildPaths {
    etnry: string;
    output: string;
    html: string;
    favicon: string;
}

export type Mode = "production" | "development"; 

export interface BuildSettings {
    mode: Mode,
    port: number;
}

export interface BuildConfig {
    paths: BuildPaths;
    mode: Mode,
    port: number,
    isDev: boolean,
}