import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nebulardemo';
  date = new Date();
  menu: NbMenuItem[] = [
    {
      title: 'profile',
      icon: {
        options: { animation: { type: 'pulse ' } },
        icon: 'person-outline',
      },
      link: '/profile',
      pathMatch: 'full',
    },
  ];
}
