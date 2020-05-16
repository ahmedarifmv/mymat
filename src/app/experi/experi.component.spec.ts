import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiComponent } from './experi.component';

describe('ExperiComponent', () => {
  let component: ExperiComponent;
  let fixture: ComponentFixture<ExperiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
