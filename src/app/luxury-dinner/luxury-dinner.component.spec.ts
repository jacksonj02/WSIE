import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryDinnerComponent } from './luxury-dinner.component';

describe('LuxuryDinnerComponent', () => {
  let component: LuxuryDinnerComponent;
  let fixture: ComponentFixture<LuxuryDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryDinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
