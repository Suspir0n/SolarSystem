import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-neptune',
  templateUrl: './neptune.page.html',
  styleUrls: ['./neptune.page.scss'],
})
export class NeptunePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  backHome(){
    this.navCtrl.navigateBack("home");
  }
}
