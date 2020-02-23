import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.page.html',
  styleUrls: ['./venus.page.scss'],
})
export class VenusPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  backHome(){
    this.navCtrl.navigateBack("home");
  }
}
