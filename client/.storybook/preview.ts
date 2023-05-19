import type { Preview } from "@storybook/react";
import '../src/index.css';
// export const preview: Preview = {
  export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
// };

