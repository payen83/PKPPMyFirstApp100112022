import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: any;
  showCard: boolean;

  constructor(public storage: Storage) { 
    this.user = {
      name: null,
      gender: null
    };
    this.showCard = false;
  }

  async ngOnInit() {
    this.storage.create();
    let data: any = await this.storage.get('USERDATA');
    if(data){
      this.user = JSON.parse(data);
      this.showCard = true;
    }
  }

  async save(){
    this.showCard = true;
    await this.storage.set('USERDATA', JSON.stringify(this.user));
  }

  async reset(){
    this.user = {
      name: null,
      gender: null
    };
    this.showCard = false;
    await this.storage.clear();
  }

}
