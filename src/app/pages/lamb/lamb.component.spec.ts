import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambComponent } from './lamb.component';

describe('LambComponent', () => {
  let component: LambComponent;
  let fixture: ComponentFixture<LambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LambComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
