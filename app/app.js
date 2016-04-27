import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {Dropbox} from './providers/dropbox/dropbox';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Dropbox],
  config: {}
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = LoginPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
