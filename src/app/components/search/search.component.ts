import { Component, EventEmitter, Output, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  @Output() search = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({ login: ['', Validators.maxLength(256)] }); // GitHub API restriction
  }

  get login(): FormControl {
    return this.loginForm.get('login') as FormControl;
  }

  ngOnInit(): void {
    this.login.reset();
  }

  ngOnDestroy(): void {
    this.login.reset();
  }

  getFormStatus() {
    return this.loginForm.status === 'INVALID' ? 'error' : '';
  }

  clearSearch() {
    this.login.reset();
  }

  triggerSearch() {
    this.search.emit(this.login.value);
  }
}
