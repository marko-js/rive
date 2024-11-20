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
          "In Vite projects, put this component in the `<head>` of your layout whenever you will be using a Rive asset to preload the runtime.",
      },
    },
  },
  argTypes: {},
} as Meta<FromFileInput>;

export const Example: Story<FromFileInput> = {
  args: {},
};
