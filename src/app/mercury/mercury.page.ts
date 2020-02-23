import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.page.html',
  styleUrls: ['./mercury.page.scss'],
})
export class MercuryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  backHome(){
    this.navCtrl.navigateBack("home");
  }
}
