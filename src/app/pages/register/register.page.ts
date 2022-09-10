import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    constructor(private route: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToWelcome() {
        this.route.navigate(['/welcome']);
    }

    goToBack() {
        this.navCtrl.back();
    }

    goToLogin() {
        this.route.navigate(['/login']);
    }

}
