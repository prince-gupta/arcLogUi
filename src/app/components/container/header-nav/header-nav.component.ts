import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private routeService:ActivatedRoute) { }

  @Input() title:string
  ngOnInit() {
  }

}
