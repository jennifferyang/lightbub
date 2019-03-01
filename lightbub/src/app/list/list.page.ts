@ -7,26 +7,44 @@ import { Component, OnInit } from '@angular/core';
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
<<<<<<< HEAD
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
=======
>>>>>>> parent of fe0c95f... Update list.page.ts
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
<<<<<<< HEAD
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
=======
>>>>>>> parent of fe0c95f... Update list.page.ts
    }
  }
