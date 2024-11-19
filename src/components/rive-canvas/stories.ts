import type { Meta, Story } from "@storybook/marko";
import FromFile, {
  type Input as FromFileInput,
} from "./examples/from-file.marko";

export default {
  title: "From File",
  component: FromFile,
} as Meta<FromFileInput>;

export const Default: Story<FromFileInput> = {
  args: {},
};
