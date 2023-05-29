import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10,
  }]

  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter();


  onDeleteCharacter(id?:string):void{
    //TODO: emitir el ID del personaje
    if(!id)return;
    //console.log({index});
    this.onDelete.emit(id);
  }

}
