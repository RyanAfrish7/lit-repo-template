import { html } from 'lit-html';
import { SampleComponent } from '../';

customElements.define('sample-component', SampleComponent);

export default {
  title: 'Example/Sample Component'
};

const Template = (args) => html`<sample-component></sample-component>`;

export const Primary = Template.bind({});
