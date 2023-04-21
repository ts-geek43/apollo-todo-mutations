
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://sxewr.sse.codesandbox.io/",
  documents: "src/mutation/*.graphql",
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
