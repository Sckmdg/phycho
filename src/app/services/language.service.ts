import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  constructor() { }

  public lang = 0;
  getLanguage(): number {
    return this.lang;
  }
  changeLanguage(lang: number): void {
    this.lang = lang;
    localStorage.setItem('lang', `${lang}`);
  }
}
