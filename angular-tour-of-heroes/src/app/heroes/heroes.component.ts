import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from '../hero';
//import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  //heroes: Hero[] = [];
  heroes: Hero[] = heroes;

  //constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //console.log(this.heroService.getHeroes())
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  

}
