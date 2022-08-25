import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }
  paragraphId = 0;
  display = false;
  text="The world is a book, and those who do not travel read only a page.";
  items = [
    {
      id: 1,
      name: 'Item 1'
    },
    { 
      id: 2,
      name: 'Item 2'
    },
  ]
  onclick(){
    this.display = !this.display;
  }
  ngOnInit(): void {
  }

}
