import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saturn',
  templateUrl: './saturn.page.html',
  styleUrls: ['./saturn.page.scss'],
})
export class SaturnPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  backHome(){
    this.navCtrl.navigateBack("home");
  }
}
