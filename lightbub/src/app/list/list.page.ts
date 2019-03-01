import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
   private icons = [
     'bulb', 
     'information',
     'star'
  //   'wifi',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
   ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    this.items.push({
      title: 'Home',
      note: 'Your Lightbug Lives Here',
      icon: 'bulb'
    }) 
    this.items.push({
      title: 'Information',
      note: 'Get Help Here ',
      icon: 'information'
    }) 
    this.items.push({
      title: 'Achievements',
      note: 'Badges and Awards',
      icon: 'star'
    }) 
    //for (let i = 1; i < 11; i++) {
     // this.items.push({
     //   title: 'Item ' + i,
     //   note: 'This is item #' + i,
      //  icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      //}
      //);
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
