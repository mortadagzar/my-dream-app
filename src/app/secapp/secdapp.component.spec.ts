import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecappComponent } from './secapp.component';

describe('SecappComponent', () => {
  let component: SecappComponent;
  let fixture: ComponentFixture<ThirdappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
