import type { Meta, Story } from "@storybook/marko";
import FromFile, {
  type Input as FromFileInput,
} from "./examples/with-preload.marko";

export default {
  title: "With Preload",
  component: FromFile,
} as Meta<FromFileInput>;

export const Default: Story<FromFileInput> = {
  args: {},
};
