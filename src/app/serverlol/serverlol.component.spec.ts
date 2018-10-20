import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlolComponent } from './serverlol.component';

describe('ServerlolComponent', () => {
  let component: ServerlolComponent;
  let fixture: ComponentFixture<ServerlolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerlolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerlolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
