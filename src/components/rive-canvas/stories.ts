import type { Meta, Story } from "@storybook/marko";
import FromFile, {
  type Input as FromFileInput,
} from "./examples/from-file.marko";

import exampleCode from "./examples/from-file.marko?raw";

export default {
  title: "<rive-canvas>",
  component: FromFile,
  parameters: {
    docs: {
      description: {
        component: `
Use this component to render [Rive](https://rive.app/) animations in your Marko application.

By default, the asset is frozen in its initial state until you call \`.play()\` on the Rive object.
`,
      },
    },
  },
  argTypes: {
    src: {
      description: "The source of the `.riv` file to be displayed",
      table: {
        category: "Rive Parameters",
      },
    },
    stateMachines: {
      description:
        "string or list of strings detailing which state machines to render",
      table: {
        category: "Rive Parameters",
      },
    },
    otherRiveParamters: {
      name: "...RiveParameters",
      description:
        "All parameters available in [the RiveParameters object from `@rive/canvas-lite`](https://github.com/rive-app/rive-wasm/blob/3e048e4866310d0f890481f071290e4807cecf32/js/src/rive.ts#L1226-L1303) may be set as attributes of the main tag.",
      table: {
        category: "Rive Parameters",
      },
    },
    canvas: {
      name: "@canvas",
      description:
        "Contains any attributes required in the host `<canvas>` element",
      table: {
        category: "@attr tags",
      },
    },
    onLoad: {
      action: "on-load",
      description: "Triggered once the Rive asset has loaded",
      table: {
        category: "Events",
      },
    },
    onMount: {
      action: "on-mount",
      description: "Triggered when the component is mounted",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<FromFileInput>;

export const StateMachine: Story<FromFileInput> = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: exampleCode,
        language: "marko",
      },
    },
  },
};
