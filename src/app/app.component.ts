import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'WebAPI Test';
  text = 'Lorem ipsum dolor sit amet';
  url = 'https://steffen-bahrmann.de';

  constructor() {
    console.log(navigator);
  }

  share(evt?: any) {
    if (evt) {
      const obj = {
        title: this.title,
        text: this.text,
        files: evt.target.files
      }
      navigator.share(obj);
    } else {
      const obj = {
        title: this.title,
        text: this.text,
        url: this.url,
      };
      navigator.share(obj);
    }
  }

  copy() {
    navigator.clipboard.writeText(this.text);
    console.log('copy');
  }

  copyRead() {
    navigator.clipboard.readText().then((val) => {
      console.log(val);
    })
  }

  geolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);

      console.log(position.coords.latitude, position.coords.longitude);
    })
  }
}
