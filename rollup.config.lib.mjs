// rollup.config.mjs
import { glob } from "glob";
import path from "node:path";
import commonRollupConfig from "./commonRollupConfig.mjs";

const libs = Object.fromEntries(
  glob.sync("lib/**.ts").map((file) => [path.basename(file, ".ts"), file])
);

export default {
	input: libs,
	output: {
    dir: 'dist',
		entryFileNames: "[name]-[hash:10].js",
		format: "es"
	},
  ...commonRollupConfig
};

