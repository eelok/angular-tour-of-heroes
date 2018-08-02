import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Skill } from '../skill';
import { SKILLS } from '../skills';

@Component({
  selector: '.app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private skills: Skill[] = SKILLS;

  private heroes: Hero[] = HEROES;

  private selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

}
