import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items = [
    {
      id: 1,
      name: 'Alaraf'
    },
    { 
      id: 2,
      name: 'Taldorei'
    },
  ]
  item: any;
  constructor(private activatedroute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    const itemId= this.activatedroute.snapshot.paramMap.get('id');
     this.item = this.items.find(item => item.id === +<string>itemId);
  }

}
