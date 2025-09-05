import type { StorybookConfig } from "@storybook/marko-vite";
import { mergeConfig } from "vite";

export default {
  framework: "@storybook/marko-vite",
  stories: ["../src/**/{,*.}stories.ts"],
  docs: { defaultName: "Overview" },
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  async viteFinal(config) {
    return mergeConfig(config, { assetsInclude: ["**/*.riv"] });
  },
} satisfies StorybookConfig;
