import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
  constructor() {}

}
