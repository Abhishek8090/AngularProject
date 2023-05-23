import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  title = 'Tata Technlogies';

  btn_text = 'submit';

  message = 'Engineering a better world!!!';

  clients = ['TML', 'JLR', 'TTL'];

  myFunction(event: any): void {
    alert('Button Clicked');
  }
}
