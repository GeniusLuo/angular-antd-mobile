import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBulletinsComponent } from './news-bulletins.component';

describe('NewsBulletinsComponent', () => {
  let component: NewsBulletinsComponent;
  let fixture: ComponentFixture<NewsBulletinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBulletinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBulletinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
