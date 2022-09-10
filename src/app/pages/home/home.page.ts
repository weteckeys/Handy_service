import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  actSlider = 1;
  slideOpts = {
    slidesPerView : 3.9
  };

  serviceOpts = {
    slidesPerView : 2.3
  };

  serviceSlider = [
      {
          img : 'assets/imgs/conditioner.png',
          name : 'AC Service'
      },
      {
          img : 'assets/imgs/fan.png',
          name : 'Fan Service'
      },
      {
          img : 'assets/imgs/laptop.png',
          name : 'Laptop Service'
      },
      {
          img : 'assets/imgs/sofa.png',
          name : 'Furniture Service'
      },
      {
          img : 'assets/imgs/washing-machine.png',
          name : 'Washer Service'
      },
  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToAllServices() {
      this.route.navigate(['/all-services']);
  }

  goToOrderDetail() {
      this.route.navigate(['/order-detail']);
  }

}
