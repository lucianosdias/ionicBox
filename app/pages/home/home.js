import {Page, Loading, NavController} from 'ionic-angular';
import {Dropbox} from '../../providers/dropbox/dropbox';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  static get parameters(){
  	return [[NavController], [Dropbox]];
  }

  constructor(nav, dropbox) {

  	this.nav = nav;
  	this.dropbox = dropbox;
  	this.depth = 0;
    this.folders = [];

  }

  onPageDidEnter(){

    let loading = Loading.create({
      content: 'Syncing from Dropbox...'
    });

    this.nav.present(loading);

    this.dropbox.getFolders().subscribe(data => {
      this.folders = data.entries;
      loading.dismiss();
    }, (err) => {
      console.log(err);
    });

  }

  openFolder(path){

  	let loading = Loading.create({
  		content: 'Syncing from Dropbox...'
  	});

  	this.nav.present(loading);

  	this.dropbox.getFolders(path).subscribe(data => {
  		this.folders = data.entries;
  		this.depth++;
  		loading.dismiss();
  	}, err => {
  		console.log(err);
  	});

  }

  goBack(){

  	let loading = Loading.create({
  		content: 'Syncing from Dropbox...'
  	});

  	this.nav.present(loading);

  	this.dropbox.goBackFolder().subscribe(data => {
  		this.folders = data.entries;
  		this.depth--;
  		loading.dismiss();
  	}, err => {
  		console.log(err);
  	});

  }

}