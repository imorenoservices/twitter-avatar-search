import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'isidro-moreno-web';

  userData: User | null = null;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.findUserInLogin('morenoi').subscribe((userData) => {
      this.userData = userData;
      debugger;
    });
  }
}
