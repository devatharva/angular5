import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   
import { Route } from '@angular/router/src/config';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  id:any="";
  

  constructor(private route:ActivatedRoute) {
  this.route.params.subscribe(res => this.id);
  
   }

  ngOnInit() {
  }

}
