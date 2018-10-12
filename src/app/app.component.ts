import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitSearchUserService } from './git-search-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private GitSearchService: GitSearchService, private GitSearchUserService: GitSearchUserService){

  }
  ngOnInit(){
    this.GitSearchService.gitSearch('beginer').then((response) => {
      alert("Total Libraries Found:" + response.total_count );
    }, (error) => {
      alert("Error: " + error.statusText)
    })
    this.GitSearchUserService.gitSearchUser('nazir').then( (response) =>{
      alert("Total Users Found: " + response.total_count );
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }
  
  title = 'GitHub Browser';
  name = 'Nazir Hajje';
}
