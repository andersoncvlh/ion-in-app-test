import { InAppBrowser, InAppBrowserOptions, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  iabOptions: InAppBrowserOptions = {
    zoom: 'no',
    fullscreen: 'yes',
    location: 'no'
  };


  constructor(
    private data: DataService,
    private iab: InAppBrowser,
    protected sanitizer: DomSanitizer
  ) {
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  openSite() {
    const browser: InAppBrowserObject = this.iab.create('https://twitter.com/', '_self', this.iabOptions);
  }
}
