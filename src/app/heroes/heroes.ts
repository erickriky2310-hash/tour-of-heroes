import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {

  newHeroName = '';

  heroes = [
    { id: 12, name: 'Dr. strange' },
    { id: 13, name: 'Spider Man' },
    { id: 14, name: 'Iron Man' },
    { id: 15, name: 'Capitan america' },
    { id: 16, name: 'Batman' }
  ];

  addHero() {
    if (!this.newHeroName.trim()) return;

    const maxId = Math.max(...this.heroes.map(h => h.id));

    this.heroes.push({
      id: maxId + 1,
      name: this.newHeroName
    });

    this.newHeroName = '';
  }

  deleteHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}