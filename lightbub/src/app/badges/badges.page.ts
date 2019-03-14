import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  declare
  public image ='assets/icon/happy-on.png';
    addEvent(){
      if(this.image=='assets/icon/happy-on.png')
      {
        this.image='assets/icon/Lightbug - off.png';
      }else{
      this.image ='assets/icon/happy-on.png';
      }
      
    }
  constructor() { }

  ngOnInit() {
  }

}
