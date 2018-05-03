import {Component, DoCheck, OnInit} from '@angular/core';
import { Question } from '../../classes/question';
import { Answer } from '../../classes/answer';

@Component({
  selector: 'app-test-paper',
  templateUrl: './test-paper.component.html',
  styleUrls: ['./test-paper.component.scss']
})

export class TestPaperComponent implements OnInit, DoCheck {
  questions: Question[];
  answers: Answer[];
  title: string;
  currentQuestion: number;
  currentPercent: number;
  constructor() { }

  ngOnInit() {
    this.currentQuestion = 0;
    this.title = 'My Personality 100-Item';
    this.questions = [
      {question: 'Some question1', value: null},
      {question: 'Some question2', value: null},
      {question: 'Some question3', value: null},
      {question: 'Some question4', value: null},
      {question: 'Some question5', value: null}
    ];
    this.answers = [
      {title: 'Strongly disagree', value: 1},
      {title: 'Disagree', value: 2},
      {title: 'Neither agree nor disagree', value: 3},
      {title: 'Agree', value: 4},
      {title: 'Strongly agree', value: 5},
    ];
    }
  ngDoCheck(): void {
    this.calculateProgress();
  }

  /**
   * Setting value for question
   * @param {number} value - value of answer
   */
  onAnswer(value: number): void {
    this.questions[this.currentQuestion].value = value;
    this.currentQuestion += 1;
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
