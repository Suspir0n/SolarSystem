import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-uranus',
  templateUrl: './uranus.page.html',
  styleUrls: ['./uranus.page.scss'],
})
export class UranusPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  backHome(){
    this.navCtrl.navigateBack("home");
  }
}
