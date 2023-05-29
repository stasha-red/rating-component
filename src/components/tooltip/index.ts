import { TooltipPosition, TooltipContent } from './constants';

import { html, LitElement } from 'lit';
import { customElement, property} from 'lit/decorators.js';

import styles from './styles'

@customElement(`tooltip`)
export class Tooltip extends LitElement {
 
  @property({type: String})
  position = TooltipPosition.Top;

  @property({type: String})
  content = TooltipContent.Empty;
 
  static styles = styles;
 
  render() {
    return html` `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tooltip': Tooltip;
  }
}
