import { Color } from '../color/color';
import { Bind, Component, WebComponent } from '../web-component';

@Component({
  selector: 'phb-title',
  styles: '~title',
  template: '~title',
})
export class Title extends WebComponent {
  @Bind() color: Color;
}
