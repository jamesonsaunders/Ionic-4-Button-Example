import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isDisabled = false;

  myAction() {
    console.log('my action');
    this.isDisabled = true;

    window.open('https://jamibot.com', '_blank');
  }

}
