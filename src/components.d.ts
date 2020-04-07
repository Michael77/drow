/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
  interface DRow {}
  interface MyComponent {
    /**
     * The first name
     */
    first: string;
    /**
     * The last name
     */
    last: string;
    /**
     * The middle name
     */
    middle: string;
  }
}
declare global {
  interface HTMLDRowElement extends Components.DRow, HTMLStencilElement {}
  var HTMLDRowElement: {
    prototype: HTMLDRowElement;
    new (): HTMLDRowElement;
  };
  interface HTMLMyComponentElement
    extends Components.MyComponent,
      HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    "d-row": HTMLDRowElement;
    "my-component": HTMLMyComponentElement;
  }
}
declare namespace LocalJSX {
  interface DRow {}
  interface MyComponent {
    /**
     * The first name
     */
    first?: string;
    /**
     * The last name
     */
    last?: string;
    /**
     * The middle name
     */
    middle?: string;
  }
  interface IntrinsicElements {
    "d-row": DRow;
    "my-component": MyComponent;
  }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      "d-row": LocalJSX.DRow & JSXBase.HTMLAttributes<HTMLDRowElement>;
      "my-component": LocalJSX.MyComponent &
        JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}
