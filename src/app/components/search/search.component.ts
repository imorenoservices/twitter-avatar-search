import { Component, EventEmitter, Output, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  @Output() search = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({ login: this.fb.control('') });
  }

  get login(): FormControl {
    return this.loginForm.get('login') as FormControl;
  }

  ngOnInit(): void {
    this.login.reset();
    console.log('init value: ' + this.login.value);
  }

  ngOnDestroy(): void {
    this.login.reset();
  }

  triggerSearch() {
    this.search.emit(this.login.value);
  }
}
