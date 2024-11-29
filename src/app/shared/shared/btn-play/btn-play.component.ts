import { Component } from '@angular/core';
import { RockSvgComponent } from "../rock-svg/rock-svg.component";
import { ScissorsSvgComponent } from "../scissors-svg/scissors-svg.component";
import { PaperSvgComponent } from "../paper-svg/paper-svg.component";

@Component({
  selector: 'btn-play',
  imports: [RockSvgComponent, ScissorsSvgComponent, PaperSvgComponent],
  templateUrl: './btn-play.component.html',
  styleUrl: './btn-play.component.css'
})
export class BtnPlayComponent {

}
