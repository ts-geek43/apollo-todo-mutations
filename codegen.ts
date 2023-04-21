
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://sxewr.sse.codesandbox.io/",
  documents: "src/mutations/*.graphql",
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: ["typescript-react-apollo"]
    }
  }
};

export default config;
