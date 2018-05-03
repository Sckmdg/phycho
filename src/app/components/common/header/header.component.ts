import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LanguageService]
})
export class HeaderComponent {
  constructor(
    private langService: LanguageService
  ) {}
  changeLang(lang: number) {
    this.langService.changeLanguage(lang);
  }
}
