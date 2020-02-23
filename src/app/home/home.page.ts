import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  slideOpts = {
    direction: 'vertical',
  };
  openEarth(){
    this.navCtrl.navigateForward("earth")
  }
  openJupiter(){
    this.navCtrl.navigateForward("jupiter")
  }
  openMars(){
    this.navCtrl.navigateForward("mars")
  }
  openMercury(){
    this.navCtrl.navigateForward("mercury")
  }
  openNeptune(){    
    this.navCtrl.navigateForward("neptune")
  }
  openPluto(){
    this.navCtrl.navigateForward("pluto")
  }
  openSaturn(){
    this.navCtrl.navigateForward("saturn")
  }
  openVenus(){
    this.navCtrl.navigateForward("venus")
  }
  openUranus(){
    this.navCtrl.navigateForward("uranus")
  }


}
