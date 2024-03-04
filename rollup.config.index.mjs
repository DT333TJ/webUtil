// rollup.config.mjs
import commonRollupConfig from "./commonRollupConfig.mjs";

export default {
	input: './index.ts',
	output: {
    file: 'dist/index.js',
		format: "umd",
		name: 'tuUtils'
	},
  ...commonRollupConfig
};

