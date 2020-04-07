import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "d-row",
  styleUrl: "d-row.css",
  shadow: true,
})
export class DRow implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
