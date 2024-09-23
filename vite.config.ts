import { ConfigEnv, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import path from "path";
import preserveDirectives from "rollup-preserve-directives";

// https://vitejs.dev/config/
export default (props: ConfigEnv) => {
  return defineConfig({
    base: "./",

    build: {
      rollupOptions: {
        /** 패키지 종속성을 현재의 프로젝트가 아닌 외부 프로젝트로 추가 */
        external: [
          /** react 기반의 프로젝트에서만 사용을 목적으로 하기에 추가 */
          "react",
          "react-dom",
          /** emotion을 공통 위젯과 다른 프로젝트에서 동시에 사용 시 경고를 노출하기에 추가 */
          /** emotion 사용 시 아래 plugin에서 jsxImportSource를 react/jsx-runtime에서 @emotion/react/jsx-runtime으로 변경함*/
          /** 이때, @emotion/react/jsx-runtime을 외부 프로젝트에서 전달 받을 수 있도록 추가 */
          /** 이것을 추가하지 않으면 css props를 통해 style 설정을 한 것의 순서가 변경되는 문제가 발생 */
          /^@emotion\/*/,
          /** mui를 기반으로 제작 하지만, 추가적으로 프로젝트에서도 사용하기에 추가 */
          /^@mui\/material*/,
        ],
        output: [
          /** import,export를 사용하는 모듈 */
          {
            format: "esm",
            preserveModules: true,
            preserveModulesRoot: "src",
            entryFileNames: "esm/[name].mjs",
          },
          /** require, module.exports를 사용하는 모듈 */
          {
            format: "cjs",
            preserveModules: true,
            preserveModulesRoot: "src",
            entryFileNames: "cjs/[name].cjs",
          },
        ],
        plugins: [preserveDirectives()],
      },
    },
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
      alias: [
        { find: "@src", replacement: path.resolve(__dirname, "/src") },
        { find: "@res", replacement: path.resolve(__dirname, "/res") },
        { find: "@components", replacement: path.resolve(__dirname, "/src/components") },
      ],
    },
  });
};
