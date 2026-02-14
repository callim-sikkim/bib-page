import {Component, OnInit, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('kochanie');
  protected readonly description = signal('kochanie');

  protected position = 0;

  protected cytat = [
    "Jesteś Cudem, który nawiedził me życie i nadał mu kolor",
    "Gwiazdo ma najaśniejsza, bez Ciebie utknąłbym w mroku",
    "Oddałbym dla Ciebie wszystko",
    "Jesteś najważniejszym powodem, dla którego wstaje rano",
    "Dajesz mi siły do walki z całym światem",
    "Jesteś Driadą w lesie mego serca",
    "Player 2 mojego życia",
    "Kochanie, nie żałowałem i nigdy nie będę żałować niczego",
    "Najseksowniejsze bibo i jedyne, które chce",
  ]

  protected gify = [
    "/a38393568d47ffa4bf235ebf4f8cfd25.gif",
    "8bf83ea6d70659994a61bf5e957f0e89.gif",
    "b3f8d8c0f14f6faec0a0e379e9cac2ae.gif",
    "5e34a694afc7640b528b5287ea122d79.gif",
    "64ec16e566abd30ea6fa92aa17908bb3.gif",
    "b92f9d5b0398875215dbc2447c7599f2.gif",
    "mochi-spoilt-mochi-love.gif",
    "99c437536f31eb85adb34eceb5b337fe.gif",
    "d6288e9f26d1a851f1b02ea0383bcfbb.gif"
  ]

  ngOnInit(): void
  {
    this.RandomPostion();
  }

   RandomPostion()
   {
     this.position = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4);
   }
}
