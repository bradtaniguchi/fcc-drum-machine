import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dm-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'client';
}
