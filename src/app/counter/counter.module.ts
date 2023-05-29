import { NgModule } from "@angular/core";
import { counterComponent } from "./components/countet/counter.component";


@NgModule({
  declarations:[
    counterComponent
  ],
  exports:[
    counterComponent
  ]
})
export class CounterModule{

}
