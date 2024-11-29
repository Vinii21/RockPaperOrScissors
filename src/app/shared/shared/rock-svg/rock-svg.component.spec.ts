import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockSvgComponent } from './rock-svg.component';

describe('RockSvgComponent', () => {
  let component: RockSvgComponent;
  let fixture: ComponentFixture<RockSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RockSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
