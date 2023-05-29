import { AppComponent } from '../../../app.component';
import { Component } from '@angular/core';



@Component({
  selector:'app-counter',
  template: `  <h3>COUNTER: {{counter}}</h3>

     <button (click)="increaseBy(+1)">+1</button>
     <button (click)="reset()">Reset</button>
     <button (click)="increaseBy(-1)">-1</button>`
})
export class counterComponent{
  public counter:number=10;
  public numberOriginal:number=this.counter;

  public increaseBy(value:number):void{
    this.counter +=value  ;

  }

  public reset():void{
    this.counter=this.numberOriginal;
  }
}
