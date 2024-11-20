import{F as e}from"./from-file-UCacLlDS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const t=`import doc from "./doc.riv";
import type { Rive } from "@rive-app/canvas-lite";
class {
  declare rive: Rive;
  handleMounted(rive: Rive) {
    this.rive = rive;
    this.rive.play();
  }

  trigger(index: number) {
    this.rive.stateMachineInputs("State Machine 1")[index].fire();
  }
}

<rive-canvas src=doc stateMachines="State Machine 1" onMount("handleMounted")>
  <@canvas width=500 height=500 class="doc"/>
</rive-canvas>

<div>
  <button onClick("trigger", 0)>
    Blink
  </button>
  <button onClick("trigger", 1)>
    Look Around
  </button>
  <button onClick("trigger", 2)>
    Adjust Glasses
  </button>
</div>
style {
  .doc {
    border: 1px solid black;
    width: 20rem;
    height: 20rem;
  }
}
`,r={title:"<rive-canvas>",component:e,parameters:{docs:{description:{component:`
Use this component to render [Rive](https://rive.app/) animations in your Marko application.

By default, the asset is frozen in its initial state until you call \`.play()\` on the Rive object.
`}}},argTypes:{src:{description:"The source of the `.riv` file to be displayed",table:{category:"Rive Parameters"}},stateMachines:{description:"string or list of strings detailing which state machines to render",table:{category:"Rive Parameters"}},otherRiveParamters:{name:"...RiveParameters",description:"All parameters available in [the RiveParameters object from `@rive/canvas-lite`](https://github.com/rive-app/rive-wasm/blob/3e048e4866310d0f890481f071290e4807cecf32/js/src/rive.ts#L1226-L1303) may be set as attributes of the main tag.",table:{category:"Rive Parameters"}},canvas:{name:"@canvas",description:"Contains any attributes required in the host `<canvas>` element",table:{category:"@attr tags"}},onLoad:{action:"on-load",description:"Triggered once the Rive asset has loaded",table:{category:"Events"}},onMount:{action:"on-mount",description:"Triggered when the component is mounted",table:{category:"Events"}}}},o={args:{},parameters:{docs:{source:{code:t,language:"marko"}}}};export{o as StateMachine,r as default};
