import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  messageSent: boolean = false;

  sendMessage(event: Event) {
    event.preventDefault(); // Prevent page reload
    if (this.name && this.email && this.message) {
      this.messageSent = true;
      setTimeout(() => {
        this.messageSent = false;
        this.name = '';
        this.email = '';
        this.message = '';
      }, 3000); // Hide popup after 3 seconds
    }
  }
}
