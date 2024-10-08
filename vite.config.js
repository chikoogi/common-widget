import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default (function (props) {
    return defineConfig({
        base: "./",
        plugins: [
            react({
                babel: {
                    plugins: [
                        [
                            "@emotion",
                            {
                                sourceMap: true,
                                autoLabel: "dev-only",
                                labelFormat: "[dirname]--[local]",
                                cssPropOptimization: false,
                            },
                        ],
                    ],
                },
            }), //
            tsconfigPaths(),
            svgr(),
        ],
        resolve: {
        /*      alias: [
          { find: "@src", replacement: path.resolve(__dirname, "/src") },
          { find: "@res", replacement: path.resolve(__dirname, "/res") },
          { find: "@components", replacement: path.resolve(__dirname, "/src/components") },
        ],*/
        },
    });
});
