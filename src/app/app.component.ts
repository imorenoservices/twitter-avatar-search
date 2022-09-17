import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isidro-moreno-web';
}
