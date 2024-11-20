# Marko Rive

A wrapper around the `@rive/canvas-lite` package that provides a Marko component for rendering [Rive](https://rive.app/) animations.

## Installation

```bash
npm install @marko-tags/rive
yarn add @marko-tags/rive
```

## Usage

### Marko 6 (Tags API)

```marko
import riveAsset from "./path/to/asset.riv";

<rive-canvas/riveInstance src=riveAsset/>

<script>riveInstance?.play();</script>
```

### Marko 5 (Class API)

```marko
import riveAsset from "./path/to/asset.riv";
import type { Rive } from "@rive-app/canvas-lite";

<rive-canvas src=riveAsset onMount("handleMounted")/>
class {
  declare riveInstance: Rive;
  handleMounted(instance: Rive) {
    this.riveInstance = instance;
    this.riveInstance.play();
  }
}
```

## Preloading the Rive Runtime

By default, the Rive runtime is loaded asynchronously when the component is mounted. This is harmful for performance, especially for assets which are visible on page load. To preload the runtime, be sure that you add this tag to the `<head>` of each document that uses Rive assets:

```marko
<rive-preload-vite/>
```
