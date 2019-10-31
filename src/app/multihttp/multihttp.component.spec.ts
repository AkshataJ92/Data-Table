import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultihttpComponent } from './multihttp.component';

describe('MultihttpComponent', () => {
  let component: MultihttpComponent;
  let fixture: ComponentFixture<MultihttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultihttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultihttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
