import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name:string='ironman';
  public age:number=45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='Wolverine';
  }

  changeAge():void{
    this.age=55;
  }

  resetForm():void{
    this.name='ironman';
    this.age=45;
    //document.querySelector('h1')!.innerHTML='<h1> Desde Angular </h1>';
    // document.querySelectorAll('h1')!.forEach(Element=>{
    //   Element.innerHTML='<h1> Desde Angular </h1>';
    // })
  }

}
