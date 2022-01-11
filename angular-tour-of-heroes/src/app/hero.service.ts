import { Injectable } from '@angular/core';
import { Hero, heroes } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  x : string ="lol";

  constructor() { }

  getHeroes(): Hero[] {
    return heroes;
  }
  
}
