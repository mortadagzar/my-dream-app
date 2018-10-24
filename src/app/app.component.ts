import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverCreationsstatue='No server created value!';
  title = 'mortadaali';
  name= 'mortada gabi';
  Creationsstatue(event:any){
    this.serverCreationsstatue='server created successfuly!';
  }
}
