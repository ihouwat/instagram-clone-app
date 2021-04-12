import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/types';

@Component({
  selector: 'app-users-search-results',
  templateUrl: './users-search-results.component.html',
})
export class UsersSearchResultsComponent implements OnInit {

  @Input("searchResultsList") searchResultsList!:Array<User>;
  @Input("searchResultsDisp") searchResultsDisp!:boolean;

  constructor() { }

  ngOnInit(): void {console.log(this.searchResultsList);}

}
