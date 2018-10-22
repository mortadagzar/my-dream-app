import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdappComponent } from './thirdapp.component';

describe('ThirdappComponent', () => {
  let component: ThirdappComponent;
  let fixture: ComponentFixture<ThirdappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
