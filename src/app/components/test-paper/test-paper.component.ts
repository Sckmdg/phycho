import {Component, DoCheck, OnInit} from '@angular/core';
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
  questions: Question[];
  answers: Answer[];
  title: [String];
  currentQuestion: number;
  currentPercent: number;
  constructor(
    private langService: LanguageService
  ) { }

  ngOnInit() {
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
      {title: ['Не согласен1', 'Макул эмесмин1'], value: 1},
      {title: ['Не согласен2', 'Макул эмесмин2'], value: 2},
      {title: ['Можно', 'Алат '], value: 3},
      {title: ['Согласен1', 'Мен макулмун1'], value: 4},
      {title: ['Согласен2', 'Мен макулмун2'], value: 5},
    ];
    }

  ngDoCheck() {
    this.lang = Number(localStorage.lang);
    this.calculateProgress();
  }

  /**
   * Setting value for question
   * @param {number} value - value of answer
   */
  onAnswer(value: number): void {
    if (this.currentQuestion !== this.questions.length - 1) {
      this.questions[this.currentQuestion].value = value;
      this.currentQuestion += 1;
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

}
