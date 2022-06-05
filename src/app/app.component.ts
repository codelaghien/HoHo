import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Welcome to';
  public name = 'Khuê';

  public changeName(name: string): void {
    console.log('changeName: ', name);
    this.name = name;
  }
}
