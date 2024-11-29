import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperSvgComponent } from './paper-svg.component';

describe('PaperSvgComponent', () => {
  let component: PaperSvgComponent;
  let fixture: ComponentFixture<PaperSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
