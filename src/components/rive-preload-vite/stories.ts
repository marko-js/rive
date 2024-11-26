import type { Meta, Story } from "@storybook/marko";
import FromFile, {
  type Input as FromFileInput,
} from "./examples/with-preload.marko";

export default {
  title: "<rive-preload-vite>",
  component: FromFile,
  parameters: {
    docs: {
      description: {
        component:
          "In Vite projects, this tag should be added to the  `<head>` of any document where Rive is used.",
      },
    },
  },
  argTypes: {},
} as Meta<FromFileInput>;

export const Example: Story<FromFileInput> = {
  args: {},
};
