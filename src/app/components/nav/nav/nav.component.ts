import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { title: 'Action', link: '#' },
    { title: 'Another action', link: '#' },
    { title: 'Something else here', link: '#' }
  ];

}
