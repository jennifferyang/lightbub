import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  declare
  public image ='assets/icon/Badges (1).png';
    addEvent(){
      if(this.image=='assets/icon/Badges (1).png')
      {
        this.image='assets/icon/badgewin.jpg';
      }else{
      this.image ='assets/icon/Badges (1).png';
      }
      
    }
  constructor() { }

  ngOnInit() {
  }

}
