import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScissorsSvgComponent } from './scissors-svg.component';

describe('ScissorsSvgComponent', () => {
  let component: ScissorsSvgComponent;
  let fixture: ComponentFixture<ScissorsSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScissorsSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScissorsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
