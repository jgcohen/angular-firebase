import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 title="Tuto-angular";

  constructor() { }

  ngOnInit(): void {
  }
  get_address() : string{
    return 'an other page'
  }
}
