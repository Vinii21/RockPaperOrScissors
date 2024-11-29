import { Component, ViewEncapsulation } from '@angular/core';
import { TitleH1Component } from '../../shared/title-h1/title-h1.component';
import { BtnPlayComponent } from '../../shared/btn-play/btn-play.component';


@Component({
  selector: 'app-home',
  imports: [TitleH1Component, BtnPlayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: { class: 'place_home' },
  encapsulation: ViewEncapsulation.None,
})
export default class HomeComponent {

}
