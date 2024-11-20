import type { StorybookConfig } from "@storybook/marko-vite";
import { mergeConfig } from "vite";
import fsp from "node:fs/promises";

export default {
  framework: "@storybook/marko-vite",
  stories: ["../src/**/{,*.}stories.ts"],
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: true,
    defaultName: "Overview",
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      assetsInclude: ["**/*.riv"],
    });
  },
} satisfies StorybookConfig;
