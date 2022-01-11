import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//import * as Omise from 'omise';
//import * as md5 from 'js-md5';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //console.log(Omise);
    //console.log(md5("lol"));
    this.heroes = this.heroService.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
