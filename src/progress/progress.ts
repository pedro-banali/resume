import { Color } from '../color/color';
import { Bind, Component, WebComponent } from '../web-component';

@Component({
  selector: 'phb-progress',
  styles: '~progress',
  template: '~progress',
})
export class Progress extends WebComponent {
  @Bind() amount: number;
  @Bind() color: Color;
}
