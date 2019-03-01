import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  declare
  public myimage ='assets/icon/happy-on.png';
    addEvent(){
      if(this.myimage=='assets/icon/happy-on.png')
      {
        this.myimage='assets/icon/Lightbug - off.png';
      }else{
      this.myimage ='assets/icon/happy-on.png';
      }
      
    }
}
