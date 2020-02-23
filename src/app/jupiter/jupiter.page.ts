import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.page.html',
  styleUrls: ['./jupiter.page.scss'],
})
export class JupiterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  backHome(){
    this.navCtrl.navigateBack("home");
  }
}
