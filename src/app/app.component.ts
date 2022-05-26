import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Astro Bookings';
  public subtitle = 'Welcome on board';
  public author = 'Alberto Basalo';
  public authorUrl = 'https://twitter.com/albertobasalo';
  public agencies = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];
  public reloading = false;
  public getAgenciesLength() {
    return this.agencies.length;
  }
  public reload(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }
}
