import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBulletinsDetailsComponent } from './news-bulletins-details.component';

describe('NewsBulletinsDetailsComponent', () => {
  let component: NewsBulletinsDetailsComponent;
  let fixture: ComponentFixture<NewsBulletinsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBulletinsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBulletinsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
