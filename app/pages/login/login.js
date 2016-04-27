import {Page, NavController, Loading} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Dropbox} from '../../providers/dropbox/dropbox';

@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  static get parameters() {
    return [[NavController], [Dropbox]];
  }

  constructor(nav, dropbox) {
    this.nav = nav;
    this.dropbox = dropbox;
  }

  login() {

    this.dropbox.login().then((success) => {
      this.nav.setRoot(HomePage);
    }, (err) => {
      console.log(err);
    });
    
  }
}
