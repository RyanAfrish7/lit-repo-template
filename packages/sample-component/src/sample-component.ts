import styles from "./sample-component.scss";
import { LitElement, html } from "lit-element";

export class SampleComponent extends LitElement {
  static styles = styles;

  render() {
    return html`Hello <h1>World</h1>`;
  }
}
