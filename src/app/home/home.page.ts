import { Component } from '@angular/core';

import {ANIMALES} from "../data/data.animales"

import {Animal} from "../../interfaces/animal.interface"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  animales:Animal[] = [];


  constructor(){
    this.animales = ANIMALES.slice(0); // Esto lo que hace es un clone y así no modifica el origen ANIMALES
  }

  reproducir (animal: Animal) {
    console.log (animal);

    let audio = new Audio (); // es un objeto de HTML5

    audio.src = animal.audio;

    audio.load();
    audio.play();

    animal.reproduciendo = true;

    setTimeout( () => animal.reproduciendo = false, animal.duracion * 1000 )
  }

}
