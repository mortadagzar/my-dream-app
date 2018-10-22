import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthappComponent } from './fifthapp.component';

describe('FifthappComponent', () => {
  let component: FifthappComponent;
  let fixture: ComponentFixture<FifthappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
