import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { thirdappComponent } from './thirdapp.component';

describe('thirdappComponent', () => {
  let component: thirdappComponent;
  let fixture: ComponentFixture<thirdappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ thirdappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(thirdappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
