import { Component, OnInit, Inject } from '@angular/core';
import {LeaderService} from '../service/leader.service'
import { Leader } from '../shared/leader';
import {flyInOut,expand} from '../animations/app.animation'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {
  leaders:Leader[];
  url;
  constructor(private leaderService:LeaderService,
    @Inject('BaseURL') private baseURL
    ) { }

  ngOnInit() {
     this.leaderService.getLeaders()
     .subscribe(leaders=>  this.leaders =leaders)
     this.url=this.baseURL
  }
  
}
