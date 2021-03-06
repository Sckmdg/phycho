import {Component, DoCheck, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../classes/question';
import { Answer } from '../../classes/answer';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-test-paper',
  templateUrl: './test-paper.component.html',
  styleUrls: ['./test-paper.component.scss'],
  providers: [LanguageService]
})

export class TestPaperComponent implements OnInit, DoCheck {
  lang: number;
  questions: any;
  answers: any;
  title: any;
  currentQuestion: number;
  currentPercent: number;
  extraversion = 0;
  neuroticism = 0;
  openness = 0;
  consciousness = 0;
  friendly = 0;

  constructor(
    private langService: LanguageService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.currentQuestion = 0;
    this.lang = this.langService.getLanguage();
    this.title = ['Моя личность 100 предметов', 'Менин Personality 100-пункту'];
    this.questions = [
      {question: ['Вопрос1', 'Суроо1'], value: null},
      {question: ['Вопрос2', 'Суроо2'], value: null},
      {question: ['Вопрос3', 'Суроо3'], value: null},
      {question: ['Вопрос4', 'Суроо4'], value: null},
      {question: ['Вопрос5', 'Суроо5'], value: null}
    ];
    this.answers = [
      {title: ['Нет, это не обо мне', ''], value: 1},
      {title: ['Иногда это обо мне, иногда — нет', ''], value: 2},
      {title: ['Да, это точно обо мне', ' '], value: 3}
    ];

    this.langService.getQuestions(1)
      .subscribe(
        response => {
          console.log(response); // TODO check this
          // this.title = response.name;
          // this.questions = response.questions;
        },
        error => console.log(error)
      );
    }

  ngDoCheck() {
    this.lang = Number(localStorage.lang);
    this.calculateProgress();
    this.calculateResults();
  }

  /**
   * Setting value for question
   * @param {number} value - value of answer
   */
  onAnswer(value: number): void {
    if (this.currentQuestion !== this.questions.length - 1) {
      this.questions[this.currentQuestion].value = value;
      this.currentQuestion += 1;
    } else {
      this.questions[this.currentQuestion].value = value;
      this.router.navigate(['/voted']);
    }
  }

  onForward(): void {
    if (this.currentQuestion !== this.questions.length - 1) {
      this.currentQuestion += 1;
    }
  }

  onBack(): void {
    if (this.currentQuestion !== 0) {
      this.currentQuestion -= 1;
    }
  }

  calculateProgress(): void {
    let count = 0;
    this.questions.map(item => {
      if (item.value) {
        count += 1;
      }
    });
    this.currentPercent = count * 100 / this.questions.length;
  }

  calculateResults(): void {
    this.questions.map((item, key) => {
      if (key % 5 === 0) {
        this.extraversion = item.value * 100 / 16;
      }

      if ((key + 1) % 5 === 0) {
        this.neuroticism = item.value * 100 / 16;
      }

      if ((key + 2) % 5 === 0) {
        this.openness = item.value * 100 / 16;
      }

      if ((key + 3) % 5 === 0) {
        this.consciousness = item.value * 100 / 16;
      }

      if ((key + 4) % 5 === 0) {
        this.friendly = item.value * 100 / 16;
      }
    });
  }

}
