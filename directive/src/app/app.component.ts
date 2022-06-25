import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';
  isMan = true;

  changeShow(sex: string){
    if(sex === 'man'){
      this.isMan = true;
    }else {
      this.isMan = false;
    }
  }
}
