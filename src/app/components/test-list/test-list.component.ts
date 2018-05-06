import {Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements DoCheck {
  lang: number;
  testsPhrase = ['Выберите тест или категорию, чтобы начать поиск психологического профиля',
    'Сиздин психологиялык кароо таап баштоо үчүн сыноого же категорияны тандап'];
  constructor() { }

  ngDoCheck() {
    this.lang = Number(localStorage.lang);
  }
}
