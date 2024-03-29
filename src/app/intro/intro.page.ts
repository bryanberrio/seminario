import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "welcome",
      description: " descripcion",
      image: "../../assets/image/1.jpg ",
      help_text: " texto de ayuda",
      class: "slide-1 red-title"
    },
    { 
      title: "welcome 2",
      description: " descripcion",
      image: "../../assets/image/2.jpg ",
      help_text: " texto de ayuda",
      class: "slide-2"
    },
    {
      title: "welcome 3",
      description: " descripcion",
      image: "../../assets/image/3.jpg ",
      help_text: " texto de ayuda",
      class: "slide-3"
    }
  ]
  constructor(private router: Router,private storage:Storage) {}

    goToHome() {

      console.log ("go to home");
      this.router.navigateByUrl("/home");
    }
  ionViewDidEnter() {
    console.log ('ya entre y vi la intro');
    this.storage.set('isIntroShowed', true);

  }
   

  ngOnInit() {
  }

}
